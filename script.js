const calculateDowry = () => {
    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("startingBid").value);

    if (!name || !price) {
      document.getElementById("result").textContent = "Please enter both name and starting bid!";
      document.getElementById("result").classList.remove("d-none");
      return;
    }
    let education = Number(document.getElementById("education").value);
    price *= education;

    let netWorth = Number(document.getElementById("familyNetWorth").value);
    price *= netWorth;

    let casteBonus = Number(document.getElementById("caste").value);
    price += casteBonus;


    const skills = Array.from(document.getElementsByClassName("skills"));
    const skillBonus = skills
        .filter(skill => skill.checked)
        .reduce((total, skill) => total + Number(skill.value), 0);

    price += skillBonus;


    const ageOptions = document.getElementsByName("age");
    ageOptions.forEach(age => {
        if (age.checked) {
            price *= Number(age.value);
        }
    });


    const reputation = document.getElementsByClassName("reputation");
    for (let i = 0; i < reputation.length; i++) {
        if (reputation[i].checked) {
            const repValue = Number(reputation[i].value);
            if (Number.isInteger(repValue)) {
                price += repValue;
            } else {
                price *= repValue;
            }
        }
    }


    let loveLetter = document.getElementById("loveLetter").value;

    let person = {
      name: name,
      price: price,
      loveLetter: loveLetter
    };

    document.getElementById("result").innerHTML = `The price for your bride ${person.name} is ${person.price.toFixed(2)}$. <br> Your love letter is ${person.loveLetter}`;
    document.getElementById("result").classList.remove("d-none");
  };
  document.getElementById("calculateButton").addEventListener("click", calculateDowry);