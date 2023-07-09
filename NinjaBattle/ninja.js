var ninja1 = {
    hp: 100,
    strength: 15,
    attack: function() {
        return Math.floor(Math.random() * (ninja1.strength+1));
    }
}
var ninja2 = {
    hp: 150,
    strength: 10,
    attack: function() {
        return Math.floor(Math.random() * (ninja2.strength+1));
    }
}

for(let round=1; round<=10; round++){
    console.log("=== Round ", round, " ===");

    let damage = 0;

    // Ninja 1 attacks ninja 2
    damage = ninja1.attack();
    ninja2.hp -= damage;
    console.log("Ninja1 attacks Ninja2 and does a damage of ", damage, "! Ninja1 health: ", ninja1.hp, ". Ninja2 health: ", ninja2.hp);
    
    // Ninja 2 attacks ninja 1
    damage = ninja2.attack();
    ninja1.hp -= damage;
    console.log("Ninja2 attacks Ninja1 and does a damage of ", damage, "! Ninja1 health: ", ninja1.hp , ". Ninja2 health: ", ninja2.hp );
    
    console.log("");
}

ninja1 > ninja2 ? console.log("Ninja1 WINS!!!!!") : console.log("Ninja2 WINS!!!!!");
