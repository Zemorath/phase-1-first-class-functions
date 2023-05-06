function Monday() {
    exerciseRoutine(liftWeights);
}

function Tuesday() {
    runFiveMiles();
    swimFortyLaps();
}

function Wednesday() {
    runFiveMiles();
    runFiveMiles();
}

function Thursday() {
    runFiveMiles();
    liftWeights();
}

function Friday() {
    runFiveMiles();
    swimFortyLaps();
}

function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

Monday();

exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
})

Monday();

function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }

    exerciseRoutine(exercise);

    return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
}

const afterExercise = morningRoutine(liftWeights);


afterExercise();

function receivesAFunction (eatASmoothie) {
    eatASmoothie("yes");
}

function returnsANamedFunction() {
    return function amNamed() {
        console.log("hi");
    };
};

function returnsAnAnonymousFunction() {
    return function () {
        console.log("hello");
    };
};