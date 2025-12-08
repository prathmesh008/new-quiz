const q1 = [
    {
        id: 1,
        question: "1). Which square was divided into two different figures?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        explanation: "The yellow JS shield is the official JavaScript logo.",
        questionImage: "",
        optionImages: [
            "/photos/q1/o1.png",
            "/photos/q1/o2.png",
            "/photos/q1/o3.png",
            "/photos/q1/o4.png",
            "/photos/q1/o5.png",
        ],
        points: 3
    },
    {
        id: 2,
        question: "2). Lizzy has 7 coins of a kind. She buys three fruits at the market. Each fruit has a different price. How much is the most expensive fruit?",
        options: [
            "(A) 2 coins",
            "(B) 3 coins",
            "(C) 4 coins",
            "(D) 5 coins",
            "(E) 6 coins"
        ],
        explanation: "The green hexagon logo represents Node.js.",
        questionImage: "",
        optionImages: [
            "",     // Node.js logo (correct)
            "",                    // HTML5 logo
            ""                   // JS logo
        ],
        points: 3
    },
    {
        id: 3,
        question: "3). The rectangle on the right consists of 4 rows and 7 columns.In total, it consists of 28 white squares.Ira paints 2 rows and 1 column.How many squares remain white?",
        options: [
            '(A) 8',
            '(B) 12',
            '(C) 14',
            '(D) 17',
            '(E) 10'
        ],
        explanation: "In JavaScript, typeof null returns 'object'. This is a known bug in JavaScript.",
        questionImage: "/photos/q3/q3.png",
        optionImages: [],
        points: 3
    },
    {
        id: 4,
        question: "4). Firefighter Fred wants to put out the fire.What is the smallest number of ladders he has to climb in the picture on the right, to get to the fire without jumping?",
        options: [
            '(A) 4',
            '(B) 5',
            '(C) 6',
            '(D) 7',
            '(E) 8'
        ],
        explanation: "The toString() method returns a string representing the object.",
        questionImage: "/photos/q4/q4.png",
        optionImages: [],
        points: 3
    },
    {
        id: 5,
        question: "5). Ben has built a structure. A cat has thrown a cube off his structure:Which of these structures did Ben build?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        explanation: "JSON.stringify() converts a JavaScript object or value to a JSON string.",
        questionImage: "/photos/q5/q5.png",
        optionImages: [
            "/photos/q5/o1.png",
            "/photos/q5/q5o2.png",
            "/photos/q5/q5o3.png",
            "/photos/q5/q5o4.png",
            "/photos/q5/q5o5.png",
        ],
        points: 3
    },
    {
        id: 6,
        question: "6). Alex hangs a poster on his kitchen wall.the kitchen wall has white and grey tiles of the same size seepicture.How many grey tiles are completely covered by the poster?",
        options: [
            "(A) 15",
            "(B) 21",
            "(C) 25",
            "(D) 30",
            "(E) 35"
        ],
        explanation: "The pop() method removes the last element from an array and returns that element.",
        questionImage: "/photos/q6/q6.png",
        optionImages: [],
        points: 3
    },
    {
        id: 7,
        question: "7). Tim has black and white squares of paper. He glues the squares on the inside of awindow. This creates the pattern shown on the right.What pattern can you see from the outside?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        explanation: "// is used for single-line comments in JavaScript.",
        questionImage: "/photos/q7/q7.png",
        optionImages: [
            "/photos/q7/q7o1.png",
            "/photos/q7/q7o2.png",
            "/photos/q7/q7o3.png",
            "/photos/q7/q7o4.png",
            "/photos/q7/q7o5.png"
        ],
        points: 3
    },
    {
        id: 8,
        question: "8). 213, 214 and 215 are three consecutive three-digit numbers.Mohammad writes three consecutive four-digit numbers in a row.His sister erases a few digits from each of the three numbers.",
        options: [
            "(A) 3 8 9, 3, 9 9",
            "(B) 4 8 9, 3, 9 6",
            "(C) 4 8 9, 4, 9 8",
            "(D) 4 8 9, 4, 9 9",
            "(E) 4 8 8, 4, 9 9"
        ],
        explanation: "NaN stands for 'Not-a-Number', but its type is actually 'number'.",
        questionImage: "/photos/q8/q8.png",
        optionImages: [],
        points: 3
    },
    {
        id: 9,
        question: "9). Lisa writes the numbers 1, 2, 4, 5 and 6 in the circles of the pattern. She writeseach of the five numbers exactly once, and if she adds up the numbers alongone of the three straight lines, she gets 11 each time.Which number did she write in the circle with the question mark?",
        options: [
            "(A) 1",
            "(B) 2",
            "(C) 4",
            "(D) 5",
            "(E) 6"
        ],
        explanation: "setTimeout() executes a function after a specified number of milliseconds.",
        questionImage: "/photos/q9/q9.png",
        optionImages: [],
        points: 4
    },
    {
        id: 10,
        question: "10). These five fruits are in a basket: [apple] [grape] [cherry] [strawberry] [banana]. Ann likes [cherry]. Ben likes [apple] [grape] [cherry] [strawberry] [banana].",
        inlineImages: {
            apple: "/photos/q10/apple.png",
            grape: "/photos/q10/grapes.png",
            cherry: "/photos/q10/cherry.png",
            strawberry: "/photos/q10/strawberry.png",
            banana: "/photos/q10/banana.png"
        },
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        explanation: "JSON.stringify() is the standard method to convert a value to a JSON string.",
        questionImage: "",
        optionImages: [
            "photos/q10/apple.png",
            "photos/q10/grapes.png",
            "photos/q10/cherry.png",
            "photos/q10/strawberry.png",
            "photos/q10/banana.png"
        ],
        points: 4
    },
    {
        id: 11,
        question: "11). The wizard Adam built the tower on the right out of 8 discs. He magically makes discs disappear one after the other: First the second disc from the bottom, then from the new tower the third disc from the bottom. Then he makes the fourth disc from bottom of the newly created tower disappear. At the end, he removes the fifth disc from the bottom of the now newly created tower. What tower does Adam get?",           // text with or without inline images
        questionImage: "/photos/q11/q11.png",          // path to question image OR "" if none



        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"      // 5 options text
        ],

        optionImages: [
            "/photos/q11/q11o1.png", "/photos/q11/q11o2.png", "/photos/q11/q11o3.png", "/photos/q11/q11o4.png", "/photos/q11/q11o5.png"        // 5 image paths or "" for no image
        ],



        points: 4
    },
    {
        id: 12,
        question: "12). Penguin Peter goes fishing every day and brings 9 fish for his two children. Every day he gives 5 fish to the first child he sees. The other child then gets 4 fish. In the last few days, a child has had a total of 26 fish. How many fish did the other child get?",           // text with or without inline images
        questionImage: "",          // path to question image OR "" if none



        options: [
            "(A) 19", "(B) 22", "(C) 25", "(D) 28", "(E) 31"       // 5 options text
        ],

        optionImages: [
            // 5 image paths or "" for no image
        ],



        points: 4
    },
    {
        id: 13,
        question: "13. 7 cards with the numbers from 1 to 7 are placed in these four overlapping rings: If you add up the numbers of all the cards in a ring, the result is always 10. What number is on the card with the question mark?",
        questionImage: "/photos/q13/q13.png",



        options: [
            "(A) 1", "(B) 2", "(C) 4", "(D) 5", "(E) 7"
        ],

        optionImages: [
            "",
            "",
            "",
            "",
            ""],


        points: 4
    },
    {
        id: 14,
        question: "14). Lucas has these five pieces of a puzzle available: He wants to lay a caterpillar consisting of a head, a tail and 1, 2 or 3 parts in between. How many different caterpillars can Lucas build?",
        questionImage: "/photos/q14/q14.png",



        options: [
            "(A) 3", "(B) 4", "(C) 5", "(D) 6", "(E) 7"],

        optionImages: [
            "",
            "",
            "",
            "",
            ""],


        points: 4
    },
    {
        id: 15,
        question: "15. Kangaroo Joey hops through a maze.The arrows of a field indicate how far, and in which direction,Joey has to bounce. A field with three arrows means that Joey bounces in the direction of the arrows, skipping two spaces, and landing in the 3rd space. Through which exit will Joey leave the maze, if he starts in the bottom left field with the three arrows?",
        questionImage: "/photos/q15/q15.png",



        options: [
            "(A) through A", "(B) through B", "(C) through C", "(D) through D", "(E) through none of the four exits"
        ],

        optionImages: [
            "",
            "",
            "",
            "",
            ""],


        points: 4
    },
    {
        id: 16,
        question: "16. Two types of tiles were used for a kitchen floor: rectangular [rectangle] and square [square]. This picture shows part of the installed kitchen floor: The rectangular tiles are 23 cm long and 11 cm wide. What is the length of a side of a small square tile?",
        questionImage: "/photos/q16/q16.png",

        inlineImages: {
            square: "/photos/q16/square.png",
            rectangle: "/photos/q16/rectangle.png"
        },

        options: [
            "(A) 3 cm", "(B) 4 cm", "(C) 5 cm", "(D) 6 cm", "(E) 7 cm"],

        optionImages: [
            "",
            "",
            "",
            "",
            ""],


        points: 4
    },
    {
        id: 17,
        question: "17). Mia has 3 cards with three-digit numbers on them. If she adds the three numbers together, she gets the number 782. Unfortunately, a worm has eaten one digit of each card. What number does she get when she adds up the three digits that the worm has eaten?",
        questionImage: "/photos/q17/q17.png",



        options: [
            "(A) 8", "(B) 9", "(C) 10", "(D) 11", "(E) 12"],

        optionImages: [
            "",
            "",
            "",
            "",
            ""],


        points: 5
    },
    {
        id: 18,
        question: "18. Lucy weighs building blocks and obtains the following values: How much do the three different building blocks weigh together?",
        questionImage: "/photos/q18/q18.png",



        options: [
            "(A) 270 g", "(B) 280 g", "(C) 290 g", "(D) 300 g", "(E) 310 g"],

        optionImages: [
            "",
            "",
            "",
            "",
            ""],


        points: 5
    },
    {
        id: 19,
        question: "19. 60 children stand in a row. Each child has a high-visibility vest and a backpack.The colours of their high-visibility vests always alternate: yellow, green, yellow, green, ...The colours of their backpacks make the following pattern: red, brown, purple, red, brown,purple, ... How many children have a yellow safety vest and a purple backpack?",
        questionImage: "",



        options: [
            "(A) 3", "(B) 4", "(C) 6", "(D) 8", "(E) 10"],

        optionImages: [
            "",
            "",
            "",
            "",
            ""],


        points: 5
    },
    {
        id: 20,
        question: "20. Cards of the same shape hide the same digits. Cards with different shapes hide different digits. Kim lays out the cards in such a way that the calculations are correct.[exam] \n What number does Kim get for the calculation[ques]?",
        questionImage: "",
        inlineImages: {
            exam: "/photos/q20/exam.png",
            ques: "/photos/q20/ques.png"
        },


        options: [
            "(A) 0", "(B) 15", "(C) 18", "(D) 28", "(E) 30"],

        optionImages: [
            "",
            "",
            "",
            "",
            ""],


        points: 5
    },
    {
        id: 21,
        question: "21. There are exactly 2 frogs in each row and in each column – see picture. Two of the six frogs jump to one of their neighbouring fields at the same time when it is empty. After that, there are again two frogs in each row and in each column. How many possibilities are there for two frogs to jump like this?",
        questionImage: "/photos/q21/q21.png",



        options: [
            "(A) 1", "(B) 2", "(C) 3", "(D) 4", "(E) 5"],

        optionImages: [
            "",
            "",
            "",
            "",
            ""],


        points: 5
    },
    {
        id: 22,
        question: "22. The picture on the right shows a honeycomb with 9 cells. There is honey in some cells. The numbers in the cells indicate how many neighbouring cells contain honey. How many cells are filled with honey?",
        questionImage: "/photos/q22/q22.png",



        options: [
            "(A) 4", "(B) 5", "(C) 6", "(D) 7", "(E) 8"],

        optionImages: [
            "",
            "",
            "",
            "",
            ""],


        points: 5
    },
    {
        id: 23,
        question: "Kanga wants to build a figure out of these three parts: [pic] \n He can also rotate or flip the parts. Which of the five pieces can he NOT make?",
        questionImage: "",
        inlineImages: {
            pic: "/photos/q23/pic.png"
        },


        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"],

        optionImages: [
            "/photos/q23/q23o1.png",
            "/photos/q23/q23o2.png",
            "/photos/q23/q23o3.png",
            "/photos/q23/q23o4.png",
            "/photos/q23/q23o5.png"],


        points: 5
    },
    {
        id: 24,
        question: "This tray of biscuits lies in the kitchen. Three girls take biscuits from the tray in an unknown order: Tina takes all the heart-shaped cookies that are still on the tray. Emma takes all the white cookies that are still on the tray. Rosa takes all the large cookies that are still on the tray. One of the girls takes 3 biscuits, one takes 6 biscuits and one takes 7 biscuits. Which of the following cookies did one of the girls take?",
        questionImage: "/photos/q24/q24.png",



        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"],

        optionImages: [
            "/photos/q24/q24o1.png",
            "/photos/q24/q24o2.png",
            "/photos/q24/q24o3.png",
            "/photos/q24/q24o4.png",
            "/photos/q24/q24o5.png"],


        points: 5
    }

]

const a1 = [4, 2, 2, 2, 4, 1, 3, 3, 2, 0, 1, 3, 0, 1, 4, 3, 3, 0, 4, 3, 3, 2, 4, 4];

const q2 = [

]
const a2=[]


export default [
    {
        quizId: 'quiz1',
        title: 'Quiz 1',
        questions: q1,
        answers: a1
    },
    {
        quizId: 'quiz2',
        title: 'Quiz 2',
        questions: q2,
        answers: a2
    }
];