import { appEmitter, EventTypes } from "./";

describe("Events", () => {
  it("Should be defined", () => {
    expect(appEmitter).toBeDefined();
  });

  it('Should have the "addListener" method', () => {
    expect(appEmitter.addListener).toBeDefined();
  });

  it('Should have the "emit" method', () => {
    expect(appEmitter.emit).toBeDefined();
  });

  it('Should have the "removeAllListeners" method', () => {
    expect(appEmitter.removeAllListeners).toBeDefined();
  });

  it('Should have the "removeCurrentListener" method', () => {
    expect(appEmitter.removeCurrentListener).toBeDefined();
  });

  it("Should emit method and listen that", () => {
    const mockFn = jest.fn();
    appEmitter.addListener("test", mockFn);
    appEmitter.emit("test");
    expect(mockFn).toHaveBeenCalled();
  });

  it("Should emit method and listen that with params", () => {
    const mockFn = jest.fn();
    appEmitter.addListener("test", mockFn);
    appEmitter.emit("test", "test");
    expect(mockFn).toHaveBeenCalledWith("test");
  });

  it("Should events objects used in the app", () => {
    const mockFn = jest.fn();

    const events = {
      test: "test",
      test2: "test2",
    };
    appEmitter.addListener("test", mockFn);

    appEmitter.emit(events.test);
    appEmitter.emit(events.test2);
    expect(mockFn).toHaveBeenCalled();
  });

  it("Should events from Events.js file used in the app", () => {
    const mockFn = jest.fn();
    const events = {
      ...EventTypes,
    };
    appEmitter.addListener(events.CHANGE_THEME, mockFn);
    appEmitter.addListener(events.CLEAR_USER, mockFn);
    appEmitter.addListener(events.SHARE_APP, mockFn);

    appEmitter.emit(events.CLEAR_USER);
    appEmitter.emit(events.CHANGE_THEME);
    appEmitter.emit(events.SHARE_APP);

    // mockFn to have been called 3 times
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
});
//
