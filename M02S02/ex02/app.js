const $form = $('#personForm');
const $skillInput = $('#skill');
const personContainerClass = 'person-container';
const skillsUlClass = 'skills-ul';

const renderPerson = (data) => {
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

  const $skillsUl = $('<ul>');

  data.skills.forEach((skillName) => {
    $('<li>', {
      text: skillName,
    }).appendTo($skillsUl);
  });

  $personContainer.append($skillsUl);
};

const renderSkillsUl = (skill) => {
  let $skillsUl = $(`.${skillsUlClass}`);

  if ($skillsUl.length < 1) {
    $skillsUl = $('<ul>', {
      class: skillsUlClass,
    });
  }
  // .appendTo($(document.body)); //echivalent cu .appendTo($('body')); ca in jQ pot sa bag elem de dom

  const $skillLi = $('<li>', {
    text: skill,
  });

  $skillsUl.on('click', 'delete-skill', function () {
    $(this).parent().remove();
  });
  // asta e un event handler pe ul, care de fiecare data cand button delete-skill e apasat, el merge

  const $proxyInput = $('<input>', {
    type: 'hidden',
    value: skill,
    name: `skill-${skill}`,
  });
  $skillLi.append($proxyInput);
  // asta e hidden input

  const $deleteSkillButton = $('<button>', {
    type: 'button',
    text: 'Delete',
    class: 'delete-skill',
  });
  $skillLi.append($deleteSkillButton);

  $skillsUl.append($skillLi);

  return $skillsUl;
};

// name e skill-
const normalizeData = (data) => {
  // reduce() e fct de array; sim cu forEach
  return data.reduce((personData, inputField) => {
    const { name, value } = inputField;

    if (name.startsWith('skill-')) {
      personData.skills = personData.skills || []; //asta ii zice ca daca nu exista campul skills, sa faca unul

      personData.skills.push(value);

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
