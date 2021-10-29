/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let castedSpellActionIdArray: number[] = [];
let todoSpellActionId: number = 0;

enum ACTION_TYPE {
    CAST = 'CAST',
    BREW = 'BREW',
    REST = 'REST',
}

interface Delta {
    actionType: ACTION_TYPE;
    price: number;
    actionId: number;
    deltaArr: number[];
}

function hasBurstInventoryLimit(cap, inputArr) {
    const total = inputArr.reduce((a, b) => a + b, 0);
    if (total > cap) {
        console.error(`burst ${cap} , ${total}`);
        console.error(inputArr);
        console.error('inputArr');
        return true;
    }
    return false;
}
function getNextMove(brewArr: Delta[], castArr: Delta[], inventoryArr: number[], shortOf: number): Delta {
    for (let j = 0; j < brewArr.length; j++) {
        const selectArr = brewArr[j];
        if (hasBurstInventoryLimit(shortOf, selectArr.deltaArr)) {
            continue;
        }
        const diffInBlue = inventoryArr[0] + selectArr.deltaArr[0];
        const diffInGreen = inventoryArr[1] + selectArr.deltaArr[1];
        const diffInOrange = inventoryArr[2] + selectArr.deltaArr[2];
        const diffInYellow = inventoryArr[3] + selectArr.deltaArr[3];
        console.error(`diffInBlue`, diffInBlue);
        console.error(`diffInGreen`, diffInGreen);
        console.error(`diffInOrange`, diffInOrange);
        console.error(`diffInYellow`, diffInYellow);
        if (diffInBlue >= 0 && diffInGreen >= 0 && diffInOrange >= 0 && diffInYellow >= 0) {
            return selectArr;
        }
        const shortBlue = diffInBlue > 0 ? 0 : diffInBlue;
        const shortGreen = diffInGreen > 0 ? 0 : diffInGreen;
        const shortOrange = diffInOrange > 0 ? 0 : diffInOrange;
        const shortYellow = diffInYellow > 0 ? 0 : diffInYellow;
        const shortArray = [shortBlue, shortGreen, shortOrange, shortYellow];
        console.error(`Short array`, shortArray);
        const nextCastMove = getNextCastMove(shortArray, castArr, inventoryArr, shortOf);
        if (!!nextCastMove) {
            return nextCastMove;
        }
    }
    return null;
}

function getNextCastMove(shortArray: number[], castArr: Delta[], inventoryArr: number[], shortOf: number): Delta {
    const beforeTotalShort = shortArray.reduce((a, b) => a + b, 0);
    console.error(`beforeTotalShort `, beforeTotalShort);
    for (let j = 0; j < castArr.length; j++) {
        const selectArr = castArr[j];
        if (hasBurstInventoryLimit(shortOf, selectArr.deltaArr)) {
            continue;
        }
        const notEnoughBlue = inventoryArr[0] + selectArr.deltaArr[0] < 0;
        const notEnoughGreen = inventoryArr[1] + selectArr.deltaArr[1] < 0;
        const notEnoughOrange = inventoryArr[2] + selectArr.deltaArr[2] < 0;
        const notEnoughYellow = inventoryArr[3] + selectArr.deltaArr[3] < 0;
        if (notEnoughBlue || notEnoughGreen || notEnoughOrange || notEnoughYellow) {
            console.error(`all not enough  ${selectArr.actionId} ${selectArr.deltaArr}`);
            break;
        }

        const diffInBlue = shortArray[0] < 0 ? shortArray[0] + selectArr.deltaArr[0] : 0;
        const diffInGreen = shortArray[1] < 0 ? shortArray[1] + selectArr.deltaArr[1] : 0;
        const diffInOrange = shortArray[2] < 0 ? shortArray[2] + selectArr.deltaArr[2] : 0;
        const diffInYellow = shortArray[3] < 0 ? shortArray[3] + selectArr.deltaArr[3] : 0;
        console.error(`getNextCastMove ${diffInBlue} ${diffInGreen} ${diffInOrange} ${diffInYellow}`);
        if (diffInBlue >= 0 && diffInGreen >= 0 && diffInOrange >= 0 && diffInYellow >= 0) {
            return selectArr;
        }
        // check if this spell can bring me closer
        const shortBlue = diffInBlue > 0 ? 0 : diffInBlue;
        const shortGreen = diffInGreen > 0 ? 0 : diffInGreen;
        const shortOrange = diffInOrange > 0 ? 0 : diffInOrange;
        const shortYellow = diffInYellow > 0 ? 0 : diffInYellow;
        const afterTotalShort = shortBlue + shortGreen + shortOrange + shortYellow;
        console.error(`afterTotalShort `, afterTotalShort);
        if (beforeTotalShort < afterTotalShort) {
            return selectArr;
        }
    }
    return null;
}

// game loop
while (true) {
    const actionCount = parseInt(readline()); // the number of spells and recipes in play
    console.error(`actionCount ${actionCount}`);
    let actionDelta: Delta;
    //before it is sorted
    const temptBrewArr: Delta[] = [];
    const castArr: Delta[] = [];
    const inventoryArr: number[] = [];
    for (let i = 0; i < actionCount; i++) {
        var inputs = readline().split(' ');
        const actionId = parseInt(inputs[0]); // the unique ID of this spell or recipe
        const actionType = inputs[1] as ACTION_TYPE; // in the first league: BREW; later: CAST, OPPONENT_CAST, LEARN, BREW
        const delta0 = parseInt(inputs[2]); // tier-0 ingredient change
        const delta1 = parseInt(inputs[3]); // tier-1 ingredient change
        const delta2 = parseInt(inputs[4]); // tier-2 ingredient change
        const delta3 = parseInt(inputs[5]); // tier-3 ingredient change
        const price = parseInt(inputs[6]); // the price in rupees if this is a potion
        const deltaSet: Delta = {
            actionType,
            price: price,
            actionId,
            deltaArr: [delta0, delta1, delta2, delta3],
        };
        if (actionType === ACTION_TYPE.BREW) {
            temptBrewArr.push(deltaSet);
        } else if (actionType === ACTION_TYPE.CAST) {
            castArr.push(deltaSet);
        }

        const tomeIndex = parseInt(inputs[7]); // in the first two leagues: always 0; later: the index in the tome if this is a tome spell, equal to the read-ahead tax
        const taxCount = parseInt(inputs[8]); // in the first two leagues: always 0; later: the amount of taxed tier-0 ingredients you gain from learning this spell
        const castable = inputs[9] !== '0'; // in the first league: always 0; later: 1 if this is a castable player spell
        const repeatable = inputs[10] !== '0'; // for the first two leagues: always 0; later: 1 if this is a repeatable player spell
    }
    const brewArr = temptBrewArr.sort(function (a, b) {
        return b.price - a.price;
    });
    for (let i = 0; i < 2; i++) {
        var inputs = readline().split(' ');
        if (i === 1) {
            //ignore opponment action first
            break;
        }
        const blue = parseInt(inputs[0]);
        const green = parseInt(inputs[1]);
        const orange = parseInt(inputs[2]);
        const yellow = parseInt(inputs[3]);
        inventoryArr.push(blue);
        inventoryArr.push(green);
        inventoryArr.push(orange);
        inventoryArr.push(yellow);
        const score = parseInt(inputs[4]); // amount of rupees
        const shortOf = 10 - blue - green - orange - yellow;
        if (todoSpellActionId === 0) {
            actionDelta = getNextMove(brewArr, castArr, inventoryArr, shortOf);
        }
    }
    if (!actionDelta && todoSpellActionId === 0) {
        throw Error('no action is derived');
    }
    // cast any todo spell first
    if (todoSpellActionId !== 0) {
        console.log(`${ACTION_TYPE.CAST} ${todoSpellActionId}`);
        castedSpellActionIdArray.push(todoSpellActionId);
        todoSpellActionId = 0;
    } else {
        console.error(`castedSpellActionIdArray ${castedSpellActionIdArray}`);
        console.error(`The next action ${actionDelta.actionId} ${actionDelta.actionType}`);
        const castSpellIndex = castedSpellActionIdArray.indexOf(actionDelta.actionId);
        // the casting spell has not been casted before
        if (actionDelta.actionType === ACTION_TYPE.CAST && castSpellIndex < 0) {
            castedSpellActionIdArray.push(actionDelta.actionId);
            console.log(`${actionDelta.actionType} ${actionDelta.actionId}`);
        }
        // the casting spell has been casted before so we need to rest
        else if (actionDelta.actionType === ACTION_TYPE.CAST && castSpellIndex >= 0) {
            castedSpellActionIdArray = [];
            todoSpellActionId = actionDelta.actionId;
            console.log(`${ACTION_TYPE.REST}`);
        }
        // brew
        else if (actionDelta.actionType === ACTION_TYPE.BREW) {
            console.log(`${actionDelta.actionType} ${actionDelta.actionId}`);
        }
        //
        else {
            throw Error('no action is triggered');
        }
    }
}
