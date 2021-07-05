const cards = [
  {
    category: 'actions',
    word: 'cry',
    translation: 'плакать',
    image: '/info/img/cry.jpg',
    audioSrc: '/info/audio/cry.mp3',
  },
  {
    category: 'actions',
    word: 'dance',
    translation: 'танцевать',
    image: '/info/img/dance.jpg',
    audioSrc: '/info/audio/dance.mp3',
  },
  {
    category: 'actions',
    word: 'dive',
    translation: 'нырять',
    image: '/info/img/dive.jpg',
    audioSrc: '/info/audio/dive.mp3',
  },
  {
    category: 'actions',
    word: 'draw',
    translation: 'рисовать',
    image: '/info/img/draw.jpg',
    audioSrc: '/info/audio/draw.mp3',
  },
  {
    category: 'actions',
    word: 'fish (action)',
    translation: 'ловить рыбу',
    image: '/info/img/fish.jpg',
    audioSrc: '/info/audio/fish (action).mp3',
  },
  {
    category: 'actions',
    word: 'fly',
    translation: 'летать',
    image: '/info/img/fly.jpg',
    audioSrc: '/info/audio/fly.mp3',
  },
  {
    category: 'actions',
    word: 'hug',
    translation: 'обнимать',
    image: '/info/img/hug.jpg',
    audioSrc: '/info/audio/hug.mp3',
  },
  {
    category: 'actions',
    word: 'jump',
    translation: 'прыгать',
    image: '/info/img/jump.jpg',
    audioSrc: '/info/audio/jump.mp3',
  },
  {
    category: 'actions-2',
    word: 'open',
    translation: 'открывать',
    image: '/info/img/open.jpg',
    audioSrc: '/info/audio/open.mp3',
  },
  {
    category: 'actions-2',
    word: 'play',
    translation: 'играть',
    image: '/info/img/play.jpg',
    audioSrc: '/info/audio/play.mp3',
  },
  {
    category: 'actions-2',
    word: 'point',
    translation: 'указывать',
    image: '/info/img/point.jpg',
    audioSrc: '/info/audio/point.mp3',
  },
  {
    category: 'actions-2',
    word: 'ride',
    translation: 'ездить',
    image: '/info/img/ride.jpg',
    audioSrc: '/info/audio/ride.mp3',
  },
  {
    category: 'actions-2',
    word: 'run',
    translation: 'бегать',
    image: '/info/img/run.jpg',
    audioSrc: '/info/audio/run.mp3',
  },
  {
    category: 'actions-2',
    word: 'sing',
    translation: 'петь',
    image: '/info/img/sing.jpg',
    audioSrc: '/info/audio/sing.mp3',
  },
  {
    category: 'actions-2',
    word: 'skip',
    translation: 'пропускать, прыгать',
    image: '/info/img/skip.jpg',
    audioSrc: '/info/audio/skip.mp3',
  },
  {
    category: 'actions-2',
    word: 'swim',
    translation: 'плавать',
    image: '/info/img/swim.jpg',
    audioSrc: '/info/audio/swim.mp3',
  },
  {
    category: 'pets',
    word: 'cat',
    translation: 'кот',
    image: '/info/img/cat.jpg',
    audioSrc: '/info/audio/cat.mp3',
  },
  {
    category: 'pets',
    word: 'chick',
    translation: 'цыплёнок',
    image: '/info/img/chick.jpg',
    audioSrc: '/info/audio/chick.mp3',
  },
  {
    category: 'pets',
    word: 'chicken',
    translation: 'курица',
    image: '/info/img/chicken.jpg',
    audioSrc: '/info/audio/chicken.mp3',
  },
  {
    category: 'pets',
    word: 'dog',
    translation: 'собака',
    image: '/info/img/dog.jpg',
    audioSrc: '/info/audio/dog.mp3',
  },
  {
    category: 'pets',
    word: 'horse',
    translation: 'лошадь',
    image: '/info/img/horse.jpg',
    audioSrc: '/info/audio/horse.mp3',
  },
  {
    category: 'pets',
    word: 'pig',
    translation: 'свинья',
    image: '/info/img/pig.jpg',
    audioSrc: '/info/audio/pig.mp3',
  },
  {
    category: 'pets',
    word: 'rabbit',
    translation: 'кролик',
    image: '/info/img/rabbit.jpg',
    audioSrc: '/info/audio/rabbit.mp3',
  },
  {
    category: 'pets',
    word: 'sheep',
    translation: 'овца',
    image: '/info/img/sheep.jpg',
    audioSrc: '/info/audio/sheep.mp3',
  },
  {
    category: 'wild-animals',
    word: 'bird',
    translation: 'птица',
    image: '/info/img/bird.jpg',
    audioSrc: '/info/audio/bird.mp3',
  },
  {
    category: 'wild-animals',
    word: 'fish',
    translation: 'рыба',
    image: '/info/img/fish1.jpg',
    audioSrc: '/info/audio/fish.mp3',
  },
  {
    category: 'wild-animals',
    word: 'frog',
    translation: 'жаба',
    image: '/info/img/frog.jpg',
    audioSrc: '/info/audio/frog.mp3',
  },
  {
    category: 'wild-animals',
    word: 'giraffe',
    translation: 'жираф',
    image: '/info/img/giraffe.jpg',
    audioSrc: '/info/audio/giraffe.mp3',
  },
  {
    category: 'wild-animals',
    word: 'lion',
    translation: 'лев',
    image: '/info/img/lion.jpg',
    audioSrc: '/info/audio/lion.mp3',
  },
  {
    category: 'wild-animals',
    word: 'mouse',
    translation: 'мышь',
    image: '/info/img/mouse.jpg',
    audioSrc: '/info/audio/mouse.mp3',
  },
  {
    category: 'wild-animals',
    word: 'turtle',
    translation: 'черепаха',
    image: '/info/img/turtle.jpg',
    audioSrc: '/info/audio/turtle.mp3',
  },
  {
    category: 'wild-animals',
    word: 'dolphin',
    translation: 'дельфин',
    image: '/info/img/dolphin.jpg',
    audioSrc: '/info/audio/dolphin.mp3',
  },
  {
    category: 'clothes',
    word: 'skirt',
    translation: 'юбка',
    image: '/info/img/skirt.jpg',
    audioSrc: '/info/audio/skirt.mp3',
  },
  {
    category: 'clothes',
    word: 'pants',
    translation: 'брюки',
    image: '/info/img/pants.jpg',
    audioSrc: '/info/audio/pants.mp3',
  },
  {
    category: 'clothes',
    word: 'blouse',
    translation: 'блузка',
    image: '/info/img/blouse.jpg',
    audioSrc: '/info/audio/blouse.mp3',
  },
  {
    category: 'clothes',
    word: 'dress',
    translation: 'платье',
    image: '/info/img/dress.jpg',
    audioSrc: '/info/audio/dress.mp3',
  },
  {
    category: 'clothes',
    word: 'boot',
    translation: 'ботинок',
    image: '/info/img/boot.jpg',
    audioSrc: '/info/audio/boot.mp3',
  },
  {
    category: 'clothes',
    word: 'shirt',
    translation: 'рубашка',
    image: '/info/img/shirt.jpg',
    audioSrc: '/info/audio/shirt.mp3',
  },
  {
    category: 'clothes',
    word: 'coat',
    translation: 'пальто',
    image: '/info/img/coat.jpg',
    audioSrc: '/info/audio/coat.mp3',
  },
  {
    category: 'clothes',
    word: 'shoe',
    translation: 'туфли',
    image: '/info/img/shoe.jpg',
    audioSrc: '/info/audio/shoe.mp3',
  },
  {
    category: 'emotions',
    word: 'sad',
    translation: 'грустный',
    image: '/info/img/sad.jpg',
    audioSrc: '/info/audio/sad.mp3',
  },
  {
    category: 'emotions',
    word: 'angry',
    translation: 'сердитый',
    image: '/info/img/angry.jpg',
    audioSrc: '/info/audio/angry.mp3',
  },
  {
    category: 'emotions',
    word: 'happy',
    translation: 'счастливый',
    image: '/info/img/happy.jpg',
    audioSrc: '/info/audio/happy.mp3',
  },
  {
    category: 'emotions',
    word: 'tired',
    translation: 'уставший',
    image: '/info/img/tired.jpg',
    audioSrc: '/info/audio/tired.mp3',
  },
  {
    category: 'emotions',
    word: 'surprised',
    translation: 'удивлённый',
    image: '/info/img/surprised.jpg',
    audioSrc: '/info/audio/surprised.mp3',
  },
  {
    category: 'emotions',
    word: 'scared',
    translation: 'испуганный',
    image: '/info/img/scared.jpg',
    audioSrc: '/info/audio/scared.mp3',
  },
  {
    category: 'emotions',
    word: 'smile',
    translation: 'улыбка',
    image: '/info/img/smile.jpg',
    audioSrc: '/info/audio/smile.mp3',
  },
  {
    category: 'emotions',
    word: 'laugh',
    translation: 'смех',
    image: '/info/img/laugh.jpg',
    audioSrc: '/info/audio/laugh.mp3',
  },
  {
    category: 'furniture',
    word: 'armchair',
    translation: 'кресло',
    image: '/info/img/armchair.jpg',
    audioSrc: '/info/audio/armchair.mp3',
  },
  {
    category: 'furniture',
    word: 'bed',
    translation: 'кровать',
    image: '/info/img/bed.jpg',
    audioSrc: '/info/audio/bed.mp3',
  },
  {
    category: 'furniture',
    word: 'chair',
    translation: 'стул',
    image: '/info/img/chair.jpg',
    audioSrc: '/info/audio/chair.mp3',
  },
  {
    category: 'furniture',
    word: 'mirror',
    translation: 'зеркало',
    image: '/info/img/mirror.jpg',
    audioSrc: '/info/audio/mirror.mp3',
  },
  {
    category: 'furniture',
    word: 'sofa',
    translation: 'диван',
    image: '/info/img/sofa.jpg',
    audioSrc: '/info/audio/sofa.mp3',
  },
  {
    category: 'furniture',
    word: 'stand',
    translation: 'тумбочка',
    image: '/info/img/stand.jpg',
    audioSrc: '/info/audio/stand.mp3',
  },
  {
    category: 'furniture',
    word: 'stool',
    translation: 'табурет',
    image: '/info/img/stool.jpg',
    audioSrc: '/info/audio/stool.mp3',
  },
  {
    category: 'furniture',
    word: 'table',
    translation: 'стол',
    image: '/info/img/table.jpg',
    audioSrc: '/info/audio/table.mp3',
  },
  {
    category: 'technics',
    word: 'iron',
    translation: 'утюг',
    image: '/info/img/iron.jpg',
    audioSrc: '/info/audio/iron.mp3',
  },
  {
    category: 'technics',
    word: 'microwave',
    translation: 'микроволновая печь',
    image: '/info/img/microwave.jpg',
    audioSrc: '/info/audio/microwave.mp3',
  },
  {
    category: 'technics',
    word: 'mixer',
    translation: 'миксер',
    image: '/info/img/mixer.jpg',
    audioSrc: '/info/audio/mixer.mp3',
  },
  {
    category: 'technics',
    word: 'refrigerator',
    translation: 'холодильник',
    image: '/info/img/refrigerator.jpg',
    audioSrc: '/info/audio/refrigerator.mp3',
  },
  {
    category: 'technics',
    word: 'teapot',
    translation: 'чайник',
    image: '/info/img/teapot.jpg',
    audioSrc: '/info/audio/teapot.mp3',
  },
  {
    category: 'technics',
    word: 'toaster',
    translation: 'тостер',
    image: '/info/img/toaster.jpg',
    audioSrc: '/info/audio/toaster.mp3',
  },
  {
    category: 'technics',
    word: 'tv',
    translation: 'телевизор',
    image: '/info/img/tv.jpg',
    audioSrc: '/info/audio/tv.mp3',
  },
  {
    category: 'technics',
    word: 'vacuum',
    translation: 'пылесос',
    image: '/info/img/vacuum.jpg',
    audioSrc: '/info/audio/vacuum.mp3',
  },
];

export default cards;
