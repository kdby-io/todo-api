import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 30,
    },
    description: {
      type: String,
    },
    isComplete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// mongoose에서 모델 -> 스키마를 기반으로 객체를 CRUD할 수 있는 인터페이스(메소드들) 제공.
export const Task = mongoose.model("Task", TaskSchema);
// tasks가 컬렉션의 이름
