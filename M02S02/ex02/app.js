$(function () {
  const $form = $('#personForm');
  const $skillInput = $('#skill');
  const $petToggle = $('#has-pets');
  const $addPetButton = $('.add-pet-button');
  const personContainerClass = 'person-container';
  const skillsUlClass = 'skills-ul';
  const petsUlClass = 'pets-ul';

  if ($petToggle.prop('checked') !== true) {
    $('.pet-fieldset').hide();
  }

  $petToggle.on('change', function () {
    //change e un event
    $('.pet-fieldset').fadeToggle();
  });

  const renderPerson = (data) => {
    console.log(data);
    let $personContainer = $(`.${personContainerClass}`);

    if ($personContainer.length < 1) {
      $personContainer = $('<section>', {
        class: personContainerClass,
      }).appendTo($('body'));
    }

    $personContainer.empty().append(
      $('<h1>', {
        text: `${data.name} ${data.surname} (${data.age})`,
      }),
    );

    $personContainer.append(
      $('<h2>', {
        text: 'Skills',
      }),
    );

    const $skillsUl = $('<ul>');

    data.skills.forEach((skillName) => {
      $('<li>', {
        text: skillName,
      }).appendTo($skillsUl);
    });

    $personContainer.append($skillsUl);

    // pets UL
    $personContainer.append(
      $('<h2>', {
        text: 'Pets',
      }),
    );

    const $petsUl = $('<ul>');

    data.pets.forEach(({ name, species, age }) => {
      // const name = pet.name
      const petDetails = `Name: ${name}. Species: ${species}. Age: ${age}`;

      $('<li>', {
        text: petDetails,
      }).appendTo($petsUl);
    });

    $personContainer.append($petsUl);

    //friends UL
  };

  const renderSkillsUl = (skill) => {
    let $skillsUl = $(`.${skillsUlClass}`);

    if ($skillsUl.length < 1) {
      $skillsUl = $('<ul>', {
        class: skillsUlClass,
      });
    }
    // .appendTo($(document.body)); //echivalent cu .appendTo($('body')); ca in jQ pot sa bag elem de dom

    const $skillLi = $('<li>').append(
      $('<span>', {
        text: skill,
        class: 'skill-display',
      }),
    );

    $skillsUl.on('click', 'delete-skill', function () {
      $(this).parent().remove();
    }); // asta e un event handler pe ul, care de fiecare data cand button delete-skill e apasat, el merge

    $skillsUl.on('click', 'button.edit-skill', function () {
      const $editButton = $(this);

      $editButton
        .hide()
        .siblings('.delete-skill')
        .hide()
        .siblings('.save-skill, .cancel-skill')
        .show()
        .siblings('.skill-input')
        .attr('type', 'text'); // = atributul type sa fie text

      $editButton.siblings('.skill-display').toggle();
    });

    // => aici e un event delegation
    // (facem function function ca sa mearga this)
    // 'button.edit-skill' e selectorul; $(this) o sa fie elem pe care se intampla eventul;
    // .siblings('.edit-skill, .delete-skill') -> toti "fratii ca re raspund la event in (), selectori adica

    $skillsUl.on('click', 'button.cancel-skill', function () {
      const $cancelButton = $(this);

      $cancelButton
        .hide()
        .siblings('.save-skill')
        .hide()
        .siblings('.edit-skill, .delete-skill')
        .show()
        .siblings('.skill-input')
        .attr('type', 'hidden');

      $cancelButton.siblings('.skill-display').toggle();
    });

    $skillsUl.on('click', 'button.save-skill', function () {
      const $saveButton = $(this);
      const $input = $saveButton.siblings('.skill-input');
      const $display = $saveButton.siblings('.skill-display');
      const newValue = $input.attr('type', 'hidden').val(); // val nu poti sa o chainui

      $display.text(newValue).show();

      $saveButton
        .hide()
        .siblings('.cancel-skill')
        .hide()
        .siblings('.edit-skill, .delete-skill')
        .show();
    });

    const $proxyInput = $('<input>', {
      type: 'hidden',
      value: skill,
      name: `skill-${skill}`,
      class: 'skill-input',
    });
    $skillLi.append($proxyInput);

    // add edit button
    const $editSkillButton = $('<button>', {
      type: 'button',
      text: 'Edit',
      class: 'edit-skill',
    });
    $skillLi.append($editSkillButton);

    const $deleteSkillButton = $('<button>', {
      type: 'button',
      text: 'Delete',
      class: 'delete-skill',
    });
    $skillLi.append($deleteSkillButton);

    // add save button
    $('<button>', {
      type: 'button',
      text: 'Save',
      class: 'save-skill',
    })
      .hide()
      .appendTo($skillLi);

    // add cancel button
    $('<button>', {
      type: 'button',
      text: 'Cancel',
      class: 'cancel-skill',
    })
      .hide()
      .appendTo($skillLi);

    $skillsUl.append($skillLi);

    return $skillsUl;
  };

  const renderPetsUl = (petData) => {
    let $petsUl = $(`.${petsUlClass}`);

    if ($petsUl.length < 1) {
      $petsUl = $('<ul>', {
        class: petsUlClass,
      });
    }

    const $petLi = $('<li>', {
      text: petData.replaceAll('|', ' '),
      class: 'pet-display',
    });

    $('<input>', {
      type: 'hidden',
      value: petData,
      name: `pet-${petData}`,
      class: 'pet-input',
    }).appendTo($petLi); //bag proxy in petLi

    return $petsUl.append($petLi);
  };

  // name e skill-
  const normalizeData = (data) => {
    // reduce() e fct de array; sim cu forEach
    return data.reduce((personData, inputField) => {
      // accidentaly NOT jQ linia mai jos
      const { name, value } = inputField;

      if (name.startsWith('skill-')) {
        personData.skills = personData.skills || []; //asta ii zice ca daca nu exista campul skills, sa faca unul

        personData.skills.push(value);

        return personData;
      }

      if (name.startsWith('pet-')) {
        let petObject = {};
        const petData = value.split('|');
        // => un array cu [nume, species, an]
        const [name, species, age] = petData;
        personData.pets = personData.pets || []; //verif daca avem un array de pets, daca nu exista il facem
        // petObject = {
        //   name: name,
        //   species: species,
        //   age: age,
        // };

        // v2 e un soi de destructurare inversa; daca sunt egale key value -> nu mai e nev sa treci tot
        petObject = {
          name,
          species,
          age,
        };

        personData.pets.push(value);

        return personData;
      }

      // bracket notation for objects
      personData[name] = value;

      return personData;
    }, {});
  };

  $form.on('submit', function (event) {
    // on() e adddEventListener din DOM
    event.preventDefault();
    const data = $(this).serializeArray();

    renderPerson(normalizeData(data));
  });

  // #skillInput + button -> asta ar fi fost ca selector css
  $skillInput.next().on('click', function () {
    const $input = $(this).prev();
    const value = $input.val();

    if (value.length < 1) {
      return;
    }

    const $skillsUl = renderSkillsUl(value);
    $skillsUl.insertAfter($input.parent());

    $input.val(''); // e o fct overloaded - e cum am facut eu la guessing game: curata field; daca primeste string practic il scrie in DOM - adica in field apare gol
  });

  //  In dreptul fiecarui element din lista adauga un buton de stergere.
  //  In momentul in care se apasa sterge elementul.
  // folosim event delegation pentru asta - ca sa puna eventul mai sus, nu pe fiecare ul in parte

  $addPetButton.on('click', function () {
    const $addPetButton = $(this);
    const $fields = $addPetButton.siblings('[id^="pet-"]');
    const fieldValues = [];

    $fields.each(function () {
      const $currentField = $(this);

      // push mutates
      fieldValues.push($currentField.val());

      $currentField.val('');
    });

    const petData = fieldValues.join('|');
    const $petsUl = renderPetsUl(petData);

    $petsUl.insertAfter($addPetButton);
    // il punem dupa addPetButton
  });
});
