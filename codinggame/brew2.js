/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let moveSet = [];
let doneLoop = false;
function burst(cap, inputArr, multiplier = 1) {
    const total = inputArr.reduce((a, b) => a + b, 0);
    if (total * multiplier > cap) {
        console.error(`burst ${cap} , ${total}`);
        console.error(inputArr);
        console.error("inputArr");
        return true;
    }
    return false;
}
function transform(brewArr, inventoryArr, spellArr, shortOf) {
    let brewableActions = [];
    for (let j = 0; j < brewArr.length; j++) {
        const selectArr = brewArr[j];
        if (burst(shortOf, selectArr.arr)) {
            continue;
        }
        const diffinBlue = inventoryArr[0] - Math.abs(selectArr.arr[0]);
        const diffinGreen = inventoryArr[1] - Math.abs(selectArr.arr[1]);
        const diffinOrange = inventoryArr[2] - Math.abs(selectArr.arr[2]);
        const diffinYellow = inventoryArr[3] - Math.abs(selectArr.arr[3]);
        if (diffinBlue >= 0 && diffinGreen >= 0 && diffinOrange >= 0 && diffinYellow >= 0) {
            brewableActions.push(selectArr);
            break;
        }
        const shortBlue = Math.abs(selectArr.arr[0]) > 0 ? Math.abs(diffinBlue) : 0;
        const shortGreen = Math.abs(selectArr.arr[1]) > 0 ? Math.abs(diffinGreen) : 0;
        const shortOrange = Math.abs(selectArr.arr[2]) > 0 ? Math.abs(diffinOrange) : 0;
        const shortYellow = Math.abs(selectArr.arr[3]) > 0 ? Math.abs(diffinYellow) : 0;
        brewableActions = canMakeUp([shortBlue, shortGreen, shortOrange, shortYellow], spellArr, shortOf);
        // any negative number is what i need from the cast
    }
    return brewableActions;
}

function canMakeUpTwice(shortArr, spellArr, shortOf, twiceIndex) {
    const spellActionIds = [];
    const newShortArr = [...shortArr];
    for (let j = 0; j < spellArr.length; j++) {
        const selectArr = spellArr[j];
        if (burst(shortOf, selectArr.arr, j === twiceIndex ? 2 : 1)) {
            continue;
        }
        if (j === twiceIndex) {
            newShortArr[0] += selectArr.arr[0];
            newShortArr[1] += selectArr.arr[1];
            newShortArr[2] += selectArr.arr[2];
            newShortArr[3] += selectArr.arr[3];
            selectArr.time = 2;
        }
        newShortArr[0] += selectArr.arr[0];
        newShortArr[1] += selectArr.arr[1];
        newShortArr[2] += selectArr.arr[2];
        newShortArr[3] += selectArr.arr[3];
        if (newShortArr[0] >= 0 && newShortArr[1] >= 0 && newShortArr[2] >= 0 && newShortArr[3] >= 0) {
            spellActionIds.push(selectArr);
            solved = true;
            break;
        }
        spellActionIds.push(selectArr);
    }
    return spellActionIds;
}


function canMakeUp(shortArr, spellArr, shortOf) {
    console.error("shortArr");
    console.error(shortArr);
    console.error("spellArr");
    console.error(spellArr);
    let spellActionIds = [];
    const newShortArr = [...shortArr];
    let solved = false;
    for (let j = 0; j < spellArr.length; j++) {
        const selectArr = spellArr[j];
        if (burst(shortOf, selectArr.arr)) {
            continue;
        }
        newShortArr[0] += selectArr.arr[0];
        newShortArr[1] += selectArr.arr[1];
        newShortArr[2] += selectArr.arr[2];
        newShortArr[3] += selectArr.arr[3];
        if (newShortArr[0] >= 0 && newShortArr[1] >= 0 && newShortArr[2] >= 0 && newShortArr[3] >= 0) {
            spellActionIds.push(selectArr);
            solved = true;
            break;
        }
        spellActionIds.push(selectArr);
    }
    if (!solved) {
        let res = [];
        res = canMakeUpTwice(shortArr, spellArr, shortOf, 0);
        res = res === [] && canMakeUpTwice(shortArr, spellArr, shortOf, 1);
        res = res === [] && canMakeUpTwice(shortArr, spellArr, shortOf, 2);
        res = res === [] && canMakeUpTwice(shortArr, spellArr, shortOf, 3);
        spellActionIds = res;
    }
    if (spellActionIds.length === 0) {
        console.error(`still empty-----------------`);
    }
    return spellActionIds;
}

// game loop
while (true) {
    const actionCount = parseInt(readline()); // the number of spells and recipes in play
    console.error(`actionCount ${actionCount}`);
    let choosenActionIds = [];
    let actionMove = "BREW";
    const temptBrewArr = [];
    const spellArr = [];
    const inventArr = [];
    for (let i = 0; i < actionCount; i++) {
        var inputs = readline().split(' ');
        const actionId = parseInt(inputs[0]); // the unique ID of this spell or recipe
        const actionType = inputs[1]; // in the first league: BREW; later: CAST, OPPONENT_CAST, LEARN, BREW
        const delta0 = parseInt(inputs[2]); // tier-0 ingredient change
        const delta1 = parseInt(inputs[3]); // tier-1 ingredient change
        const delta2 = parseInt(inputs[4]); // tier-2 ingredient change
        const delta3 = parseInt(inputs[5]); // tier-3 ingredient change
        const price = parseInt(inputs[6]); // the price in rupees if this is a potion
        const deltaArr = [delta0, delta1, delta2, delta3];
        const deltaSet = {
            actionType,
            dPrice: price,
            actionId,
            arr: deltaArr,
            time: 1
        }
        if (actionType === 'BREW') {
            temptBrewArr.push(deltaSet);
        } else if (actionType === 'CAST') {
            spellArr.push(deltaSet);
        }

        const tomeIndex = parseInt(inputs[7]); // in the first two leagues: always 0; later: the index in the tome if this is a tome spell, equal to the read-ahead tax
        const taxCount = parseInt(inputs[8]); // in the first two leagues: always 0; later: the amount of taxed tier-0 ingredients you gain from learning this spell
        const castable = inputs[9] !== '0'; // in the first league: always 0; later: 1 if this is a castable player spell
        const repeatable = inputs[10] !== '0'; // for the first two leagues: always 0; later: 1 if this is a repeatable player spell
    }
    const brewArr = temptBrewArr.sort(function (a, b) {
        return b.dPrice - a.dPrice;
    });
    for (let i = 0; i < 2; i++) {
        var inputs = readline().split(' ');
        if (i === 1) {
            //ignore opponment action first
            break;
        }
        if (moveSet.length !== 0) {
            const first = moveSet.shift();
            doneLoop = true;
            console.log(`${first.actionType} ${first.actionId}`);
            break;
        }
        inventArr.push(parseInt(inputs[0]));//blue
        inventArr.push(parseInt(inputs[1]));//green
        inventArr.push(parseInt(inputs[2]));//orange
        inventArr.push(parseInt(inputs[3]));//yellow
        const score = parseInt(inputs[4]); // amount of rupees
        if (choosenActionIds.length === 0) {
            const shortOf = 10 - inputs[0] - inputs[1] - inputs[2] - inputs[3];
            choosenActionIds = transform(brewArr, inventArr, spellArr, shortOf);
        }
    }
    if (doneLoop) {
        doneLoop = false;
    } else {
        if (choosenActionIds.length > 1) {
            if (choosenActionIds[0].time >= 0) {
                choosenActionIds[0].time -= 1;
                console.log(`${choosenActionIds[0].actionType} ${choosenActionIds[0].actionId}`);
            } else {
                const first = choosenActionIds.shift();
                console.log(`${first.actionType} ${first.actionId}`);
            }
            moveSet = choosenActionIds;
        } else {
            console.error(`nothing is here`)
        }
    }

}

