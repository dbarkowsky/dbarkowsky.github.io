const posts = [
    {
        title: 'mp3 Sorter',
        date: new Date('2021-11-29'),
        blurb: 'A little project to help sort loose mp3 files into folders.',
        paths: {
            img: '/posts/2021/mp3Sorter/thumb.jpg',
            post: '/blog/posts/2021/mp3Sorter',
            code: 'https://github.com/dbarkowsky/mp3_Sorter.git',
        }
    },
    {
        title: 'Hotel Card Printer',
        date: new Date('2021-10-15'),
        blurb: 'Looking back to the past at the first app I wrote for work.',
        paths: {
            img: '/posts/2021/cardPrinter/thumb.jpg',
            post: '/blog/posts/2021/cardPrinter',
            code: 'https://github.com/dbarkowsky/HotelCardPrinter',
        }
    },
    {
        title: 'mp3 Sorter (Update)',
        date: new Date('2022-01-08'),
        blurb: 'Making improvements to the mp3 Sorter!',
        paths: {
            img: '/posts/2022/mp3Sorter2/thumb.jpg',
            post: '/blog/posts/2022/mp3Sorter2',
            code: 'https://github.com/dbarkowsky/mp3_Sorter.git',
        }
    },
    {
        title: '$2 Billion Dollar Bill',
        date: new Date('2021-10-01'),
        blurb: 'A fun project in imaginary money and Inkscape.',
        paths: {
            img: '/posts/2021/twoBillionDollarBill/dollar_back.jpg',
            post: '/blog/posts/2021/twoBillionDollarBill',
        }
    },
    {
        title: 'Raspberry Pi Projects',
        date: new Date('2021-11-01'),
        blurb: 'Talking about my start with the Raspberry Pi.',
        paths: {
            img: '/posts/2021/piProjects/temperature.jpg',
            post: '/blog/posts/2021/piProjects',
        }
    },
    {
        title: 'SushiBot - Part 1',
        date: new Date('2022-02-08'),
        blurb: 'The first gains in making a line-following robot.',
        paths: {
            img: '/posts/2022/sushiBot1/loosewires.jpg',
            post: '/blog/posts/2022/sushiBot1',
            code: 'https://github.com/dbarkowsky/SushiBot'
        }
    },
    {
        title: 'SushiBot - Part 2',
        date: new Date('2022-04-23'),
        blurb: 'The completion of Nigiri, the sushi delivery bot.',
        paths: {
            img: '/posts/2022/sushiBot2/newroof.jpg',
            post: '/blog/posts/2022/sushiBot2',
            code: 'https://github.com/dbarkowsky/SushiBot'
        }
    },
    {
        title: 'Mock Storefront Webpage',
        date: new Date('2022-04-26'),
        blurb: 'A showcase of my final project for ICS-128.',
        paths: {
            img: '/posts/2022/ics128final/cart.png',
            post: '/blog/posts/2022/ics128final',
            demo: 'https://dbarkowsky.github.io/ICS128_Final_Project/',
            code: 'https://github.com/dbarkowsky/ICS128_Final_Project'
        }
    },
    {
        title: 'Co-op Experience',
        date: new Date('2022-08-24'),
        blurb: 'Talking about my time working at the Provincial Government.',
        paths: {
            img: '/posts/2022/coop/thumb.jpg',
            post: '/blog/posts/2022/coop',
        }
    },
    {
        title: 'Bomb Assistant',
        date: new Date('2022-12-28'),
        blurb: 'A companion app for a bomb defusal game.',
        paths: {
            img: '/posts/2022/bombAssistant/modules.png',
            post: '/blog/posts/2022/bombAssistant',
            code: 'https://github.com/dbarkowsky/BombAssistant',
            demo: 'https://dbarkowsky.github.io/BombAssistant/'
        }
    },
    {
        title: 'Advent of Code 2022',
        date: new Date('2023-01-03'),
        blurb: 'A series of programming puzzles.',
        paths: {
            img: '/posts/2023/adventOfCode/thumb.jpg',
            post: '/blog/posts/2023/adventOfCode',
            code: 'https://github.com/dbarkowsky/AdventOfCode2022',
        }
    },
    {
        title: 'My New Portfolio',
        date: new Date('2023-01-28'),
        blurb: 'Updating the portfolio you\'re on now.',
        paths: {
            img: '/landing/2021-09-18.3.jpg',
            post: '/blog/posts/2023/portfolio',
            code: 'https://github.com/dbarkowsky/dbarkowsky.github.io',
        }
    },
    {
        title: 'Game & Mobile Dev',
        date: new Date('2023-03-31'),
        blurb: `Talking about things I've made this semester.`,
        paths: {
            img: '/posts/2023/gamingAndMobile/unityapple.png',
            post: '/blog/posts/2023/gamingAndMobile',
        }
    },
    {
        title: 'Robo-Fish Attack',
        date: new Date('2023-05-04'),
        blurb: `Final project for game development class.`,
        paths: {
            img: '/posts/2023/gamingFinal/catplane.png',
            post: '/blog/posts/2023/gamingFinal',
            code: 'https://github.com/dbarkowsky/ICS223-FinalProject',
            demo: 'https://drive.google.com/file/d/1hrv6Zlr88f04zjuafHxOPlf5Xo8LUlcA/view?usp=sharing'
        }
    },
    {
        title: 'Capstone Project',
        date: new Date('2023-08-15'),
        blurb: `My final school project for purchase reimbursements.`,
        paths: {
            img: '/posts/2023/capstone/symposium.jpg',
            post: '/blog/posts/2023/capstone',
            code: 'https://github.com/bcgov/citz-imb-staff-purchase-reimbursement',
        }
    },
    {
        title: 'AITA Analysis',
        date: new Date('2023-10-18'),
        blurb: `Analyzing posts from r/AmITheAsshole`,
        paths: {
            img: '/posts/2023/aita/reddit.png',
            post: '/blog/posts/2023/aita',
            code: 'https://github.com/dbarkowsky/AITA-Analysis',
            demo: 'https://dbarkowsky.github.io/AITA-Analysis'
        }
    },
    {
        title: 'Takeaways from Work',
        date: new Date('2024-09-22'),
        blurb: `My biggest project so far`,
        paths: {
            img: '/posts/2024/pims/logo.svg',
            post: '/blog/posts/2024/pims',
            code: 'https://github.com/bcgov/PIMS',
        }
    },
    {
      title: 'Duck Checkers',
      date: new Date('2024-11-17'),
      blurb: `Like checkers but with ducks`,
      paths: {
          img: '/posts/2024/duckCheckers/duck.png',
          post: '/blog/posts/2024/duckCheckers',
          code: 'https://github.com/dbarkowsky/DuckCheckers',
          demo: 'https://duck-checkers-182828240544.us-central1.run.app'
      }
  }
];

export default posts;
