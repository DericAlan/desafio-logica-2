calculateMatchesRanked(100, 1)

function calculateMatchesRanked(victory, defeats) {
        let balanceRanked = victory - defeats
        let level = ""
        if (victory <= 10) {
                level = "Iron";
        }       else if (victory <= 20 && victory >= 11) {
                        level = "Bronze";
        }       else if (victory <= 50 && victory >= 21) {
                        level = "Silver";
        }       else if (victory <= 80 && victory >= 51) {
                        level = "Gold";
        }       else if (victory <= 90 && victory >= 81) {
                        level = "Diamond";
        }       else if (victory <= 100 && victory >= 91) {
                        level = "Legendary";
        }       else {
                        level = "Immortal";
        }
        
        console.log("The hero has the balance of " + balanceRanked + " is at the level of " + level) 
}

