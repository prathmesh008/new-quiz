import mongoose from "mongoose";
const { Schema } = mongoose;

const questionmodel = new Schema({
    quizId: { type: String, default: 'quiz1' },
    title: { type: String, default: 'Quiz' },
    questions: [
        {
            id: Number,
            question: String,
            options: [String],
            explanation: { type: String, default: "" },
            questionImage: { type: String, default: "" },
            optionImages: { type: [String], default: [] },
            inlineImages: { type: Object, default: {} },
            points: { type: Number, default: 1 }
        }
    ],
    answers: { type: Array, default: [] },
    createdat: { type: Date, default: Date.now }
});

const Questions = mongoose.model('Question', questionmodel);
export default Questions;