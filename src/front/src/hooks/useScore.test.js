import { useScore } from "./useScore";

jest.mock("redux-persist", () => {
  const real = jest.requireActual("redux-persist");
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector,
}));

describe("useScore", () => {
  it('Should return a object with the "totalScore" property equals to 0', () => {
    const { totalScore } = useScore();
    expect(totalScore).toBe(0);
  });

  it('Should return a object with the "quizesWithScore" property equals to undefined', () => {
    const { quizesWithScore } = useScore();
    expect(Array.isArray(quizesWithScore));
  });

  it('Should return a object with the "countRealizedQuizes" property equals to 0', () => {
    const { countRealizedQuizes } = useScore();
    expect(countRealizedQuizes).toBe(0);
  });

  it('Should return a object with the "countHitsInPercent" property equals to "--"', () => {
    const { countHitsInPercent } = useScore();
    expect(countHitsInPercent).toBe("--");
  });

  it('Should return a object with the "passedQuestions" property equals to 0', () => {
    const { passedQuestions } = useScore();
    expect(passedQuestions).toBe(0);
  });

  it('Should return a object with the "correctAnswers" property equals to 0', () => {
    const { correctAnswers } = useScore();
    expect(correctAnswers).toBe(0);
  });
});
