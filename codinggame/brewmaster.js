/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let shouldRest = false;
function returnBrewableActionId(requiredArr, inventoryArr) {
    let brewableActionId = 0;
    for (let j = 0; j < requiredArr.length; j++) {
        const selectArr = requiredArr[j];
        const diffinBlue = inventoryArr[0] - Math.abs(selectArr.arr[0]);
        const diffinGreen = inventoryArr[1] - Math.abs(selectArr.arr[1]);
        const diffinOrange = inventoryArr[2] - Math.abs(selectArr.arr[2]);
        const diffinYellow = inventoryArr[3] - Math.abs(selectArr.arr[3]);
        console.error(`returnBrewableActionId diffinBlue ${diffinBlue} diffinGreen ${diffinGreen} diffinOrange ${diffinOrange} diffinYellow ${diffinYellow}`);
        if (diffinBlue >= 0 && diffinGreen >= 0 && diffinOrange >= 0 && diffinYellow >= 0) {
            brewableActionId = selectArr.actionId;
            break;
        }
        // any negative number is what i need from the cast
    }
    return brewableActionId;
}

function useTempInventReturnBrewableActionId(requiredArr, inventoryArr, spellId) {
    let brewableActionId = 0;
    for (let j = 0; j < requiredArr.length; j++) {
        const selectArr = requiredArr[j];
        const diffinBlue = inventoryArr[0] - Math.abs(selectArr.arr[0]);
        const diffinGreen = inventoryArr[1] - Math.abs(selectArr.arr[1]);
        const diffinOrange = inventoryArr[2] - Math.abs(selectArr.arr[2]);
        const diffinYellow = inventoryArr[3] - Math.abs(selectArr.arr[3]);
        console.error(`useTempInventReturnBrewableActionId diffinBlue ${diffinBlue} diffinGreen ${diffinGreen} diffinOrange ${diffinOrange} diffinYellow ${diffinYellow}`);
        if (diffinBlue >= 0 && diffinGreen >= 0 && diffinOrange >= 0 && diffinYellow >= 0) {
            brewableActionId = spellId;
            console.error(`can coup ${brewableActionId}`);
            break;
        }
        if (brewableActionId === 0 && inventoryArr[1] > 0) {
            brewableActionId = spellId;
            console.error(`can green ${brewableActionId}`);
            break;
        }
        // any negative number is what i need from the cast
    }
    return brewableActionId;
}
// game loop
while (true) {
    const actionCount = parseInt(readline()); // the number of spells and recipes in play
    console.error(`actionCount ${actionCount}`);
    let choosenActionId = 0;
    let blue = 0; //inv0
    let green = 0; //inv1
    let orange = 0; //inv2
    let yellow = 0; //inv3
    let actionMove = "BREW";
    const brewArr = [];
    const spellArr = [];
    const inventArr = [];
    for (let i = 0; i < actionCount; i++) {
        var inputs = readline().split(' ');
        const actionId = parseInt(inputs[0]); // the unique ID of this spell or recipe
        choosenActionId = actionId;
        const actionType = inputs[1]; // in the first league: BREW; later: CAST, OPPONENT_CAST, LEARN, BREW
        const delta0 = parseInt(inputs[2]); // tier-0 ingredient change
        const delta1 = parseInt(inputs[3]); // tier-1 ingredient change
        const delta2 = parseInt(inputs[4]); // tier-2 ingredient change
        const delta3 = parseInt(inputs[5]); // tier-3 ingredient change
        console.error(`---------------Set ${actionId}----------------------------`);
        const price = parseInt(inputs[6]); // the price in rupees if this is a potion
        console.error(`actionType ${actionType} Delta0 ${delta0} - Delta1 ${delta1} - Delta2 ${delta2} - Delta3 ${delta3} - Price ${price}`);
        const deltaArr = [delta0, delta1, delta2, delta3];
        const deltaSet = {
            actionType,
            dPrice: price,
            actionId,
            arr: deltaArr
        }
        if (actionType === 'BREW') {
            brewArr.push(deltaSet);
        } else if (actionType === 'CAST') {
            spellArr.push(deltaSet);
        }

        const tomeIndex = parseInt(inputs[7]); // in the first two leagues: always 0; later: the index in the tome if this is a tome spell, equal to the read-ahead tax
        const taxCount = parseInt(inputs[8]); // in the first two leagues: always 0; later: the amount of taxed tier-0 ingredients you gain from learning this spell
        const castable = inputs[9] !== '0'; // in the first league: always 0; later: 1 if this is a castable player spell
        const repeatable = inputs[10] !== '0'; // for the first two leagues: always 0; later: 1 if this is a repeatable player spell
    }
    const sortedBrewActionArr = brewArr.sort(function (a, b) {
        return b.dPrice - a.dPrice;
    });
    for (let i = 0; i < 2; i++) {
        console.error(`------------${i}-------------------`);
        var inputs = readline().split(' ');
        if (i === 1) {
            //ignore opponment action first
            break;
        }
        if (shouldRest === true) {
            console.error(`resting ${shouldRest}`);
            choosenActionId = -1;
            actionMove = 'REST';
            shouldRest = false;
        }
        blue = parseInt(inputs[0]); // tier-0 ingredients in inventory
        green = parseInt(inputs[1]);
        orange = parseInt(inputs[2]);
        yellow = parseInt(inputs[3]);
        inventArr.push(blue);
        inventArr.push(green);
        inventArr.push(orange);
        inventArr.push(yellow);
        const score = parseInt(inputs[4]); // amount of rupees
        if (choosenActionId !== -1) {
            console.error(`blue ${blue} green ${green} orange ${orange} yellow ${yellow}`);
            choosenActionId = returnBrewableActionId(sortedBrewActionArr, inventArr);
            console.error(`chooseActionId after first round ${choosenActionId}`);
        }
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // in the first league: BREW <id> | WAIT; later: BREW <id> | CAST <id> [<times>] | LEARN <id> | REST | WAIT
    if (choosenActionId === 0) {
        //add cast into invent and check again
        for (let i = 0; i < spellArr.length; i++) {
            const newInv = [...inventArr];
            const selectedArr = spellArr[i];
            newInv[0] += selectedArr.arr[0];
            newInv[1] += selectedArr.arr[1];
            newInv[2] += selectedArr.arr[2];
            newInv[3] += selectedArr.arr[3];
            choosenActionId = useTempInventReturnBrewableActionId(sortedBrewActionArr, newInv, selectedArr.actionId);
            if (choosenActionId > 0) {
                actionMove = 'CAST';
                shouldRest = true;
                break;
            }
        }

    }
    console.log(`${actionMove} ${choosenActionId >= 0 ? choosenActionId : ''}`);
}