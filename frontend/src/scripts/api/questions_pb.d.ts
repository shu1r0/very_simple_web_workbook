// package: proto
// file: questions.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class LoginRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getWord(): string;
  setWord(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    id: number,
    word: string,
  }
}

export class LoginReply extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReply.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReply): LoginReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReply;
  static deserializeBinaryFromReader(message: LoginReply, reader: jspb.BinaryReader): LoginReply;
}

export namespace LoginReply {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class Problem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasGroupId(): boolean;
  clearGroupId(): void;
  getGroupId(): number;
  setGroupId(value: number): void;

  getQuestion(): string;
  setQuestion(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  hasSelectionProblem(): boolean;
  clearSelectionProblem(): void;
  getSelectionProblem(): Problem.SelectionProblem | undefined;
  setSelectionProblem(value?: Problem.SelectionProblem): void;

  hasDescriptionProblem(): boolean;
  clearDescriptionProblem(): void;
  getDescriptionProblem(): Problem.DescriptionProblem | undefined;
  setDescriptionProblem(value?: Problem.DescriptionProblem): void;

  hasWordProblem(): boolean;
  clearWordProblem(): void;
  getWordProblem(): Problem.WordProblem | undefined;
  setWordProblem(value?: Problem.WordProblem): void;

  getProblemCase(): Problem.ProblemCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Problem.AsObject;
  static toObject(includeInstance: boolean, msg: Problem): Problem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Problem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Problem;
  static deserializeBinaryFromReader(message: Problem, reader: jspb.BinaryReader): Problem;
}

export namespace Problem {
  export type AsObject = {
    id: number,
    groupId: number,
    question: string,
    category: string,
    selectionProblem?: Problem.SelectionProblem.AsObject,
    descriptionProblem?: Problem.DescriptionProblem.AsObject,
    wordProblem?: Problem.WordProblem.AsObject,
  }

  export class SelectionProblem extends jspb.Message {
    getChoicesMap(): jspb.Map<number, string>;
    clearChoicesMap(): void;
    getAnswer(): number;
    setAnswer(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectionProblem.AsObject;
    static toObject(includeInstance: boolean, msg: SelectionProblem): SelectionProblem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectionProblem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectionProblem;
    static deserializeBinaryFromReader(message: SelectionProblem, reader: jspb.BinaryReader): SelectionProblem;
  }

  export namespace SelectionProblem {
    export type AsObject = {
      choicesMap: Array<[number, string]>,
      answer: number,
    }
  }

  export class DescriptionProblem extends jspb.Message {
    getAnswer(): string;
    setAnswer(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DescriptionProblem.AsObject;
    static toObject(includeInstance: boolean, msg: DescriptionProblem): DescriptionProblem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DescriptionProblem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DescriptionProblem;
    static deserializeBinaryFromReader(message: DescriptionProblem, reader: jspb.BinaryReader): DescriptionProblem;
  }

  export namespace DescriptionProblem {
    export type AsObject = {
      answer: string,
    }
  }

  export class WordProblem extends jspb.Message {
    getTargetWord(): string;
    setTargetWord(value: string): void;

    getWordMean(): string;
    setWordMean(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WordProblem.AsObject;
    static toObject(includeInstance: boolean, msg: WordProblem): WordProblem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WordProblem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WordProblem;
    static deserializeBinaryFromReader(message: WordProblem, reader: jspb.BinaryReader): WordProblem;
  }

  export namespace WordProblem {
    export type AsObject = {
      targetWord: string,
      wordMean: string,
    }
  }

  export enum ProblemCase {
    PROBLEM_NOT_SET = 0,
    SELECTION_PROBLEM = 10,
    DESCRIPTION_PROBLEM = 11,
    WORD_PROBLEM = 12,
  }
}

export class Problems extends jspb.Message {
  clearProblemsList(): void;
  getProblemsList(): Array<Problem>;
  setProblemsList(value: Array<Problem>): void;
  addProblems(value?: Problem, index?: number): Problem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Problems.AsObject;
  static toObject(includeInstance: boolean, msg: Problems): Problems.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Problems, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Problems;
  static deserializeBinaryFromReader(message: Problems, reader: jspb.BinaryReader): Problems;
}

export namespace Problems {
  export type AsObject = {
    problemsList: Array<Problem.AsObject>,
  }
}

export class Answer extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): void;

  getIsCorrect(): boolean;
  setIsCorrect(value: boolean): void;

  hasYourAnswer(): boolean;
  clearYourAnswer(): void;
  getYourAnswer(): google_protobuf_any_pb.Any | undefined;
  setYourAnswer(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Answer.AsObject;
  static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Answer;
  static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
}

export namespace Answer {
  export type AsObject = {
    timestamp: number,
    isCorrect: boolean,
    yourAnswer?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class OneProblemHistory extends jspb.Message {
  getProblemId(): number;
  setProblemId(value: number): void;

  clearYourAnswersList(): void;
  getYourAnswersList(): Array<Answer>;
  setYourAnswersList(value: Array<Answer>): void;
  addYourAnswers(value?: Answer, index?: number): Answer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneProblemHistory.AsObject;
  static toObject(includeInstance: boolean, msg: OneProblemHistory): OneProblemHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OneProblemHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneProblemHistory;
  static deserializeBinaryFromReader(message: OneProblemHistory, reader: jspb.BinaryReader): OneProblemHistory;
}

export namespace OneProblemHistory {
  export type AsObject = {
    problemId: number,
    yourAnswersList: Array<Answer.AsObject>,
  }
}

export class ProblemHistory extends jspb.Message {
  clearHistoryList(): void;
  getHistoryList(): Array<OneProblemHistory>;
  setHistoryList(value: Array<OneProblemHistory>): void;
  addHistory(value?: OneProblemHistory, index?: number): OneProblemHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProblemHistory.AsObject;
  static toObject(includeInstance: boolean, msg: ProblemHistory): ProblemHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProblemHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProblemHistory;
  static deserializeBinaryFromReader(message: ProblemHistory, reader: jspb.BinaryReader): ProblemHistory;
}

export namespace ProblemHistory {
  export type AsObject = {
    historyList: Array<OneProblemHistory.AsObject>,
  }
}

export class GetProblemsRequest extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): void;

  hasGroupId(): boolean;
  clearGroupId(): void;
  getGroupId(): number;
  setGroupId(value: number): void;

  getProblemNumber(): number;
  setProblemNumber(value: number): void;

  getOption(): GetProblemsRequest.GetProblemsOptionMap[keyof GetProblemsRequest.GetProblemsOptionMap];
  setOption(value: GetProblemsRequest.GetProblemsOptionMap[keyof GetProblemsRequest.GetProblemsOptionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProblemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProblemsRequest): GetProblemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProblemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProblemsRequest;
  static deserializeBinaryFromReader(message: GetProblemsRequest, reader: jspb.BinaryReader): GetProblemsRequest;
}

export namespace GetProblemsRequest {
  export type AsObject = {
    category: string,
    groupId: number,
    problemNumber: number,
    option: GetProblemsRequest.GetProblemsOptionMap[keyof GetProblemsRequest.GetProblemsOptionMap],
  }

  export interface GetProblemsOptionMap {
    NO_OPTION: 0;
    RANDOM: 1;
    WRONG_ONLY: 2;
    WRONG_FIRST: 3;
  }

  export const GetProblemsOption: GetProblemsOptionMap;
}

export class GetProblemsReply extends jspb.Message {
  getProblemNumber(): number;
  setProblemNumber(value: number): void;

  hasProblems(): boolean;
  clearProblems(): void;
  getProblems(): Problems | undefined;
  setProblems(value?: Problems): void;

  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): ProblemHistory | undefined;
  setHistory(value?: ProblemHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProblemsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetProblemsReply): GetProblemsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProblemsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProblemsReply;
  static deserializeBinaryFromReader(message: GetProblemsReply, reader: jspb.BinaryReader): GetProblemsReply;
}

export namespace GetProblemsReply {
  export type AsObject = {
    problemNumber: number,
    problems?: Problems.AsObject,
    history?: ProblemHistory.AsObject,
  }
}

export class UpdateProblemsRequest extends jspb.Message {
  getType(): UpdateProblemsRequest.UpdateProblemsTypeMap[keyof UpdateProblemsRequest.UpdateProblemsTypeMap];
  setType(value: UpdateProblemsRequest.UpdateProblemsTypeMap[keyof UpdateProblemsRequest.UpdateProblemsTypeMap]): void;

  hasProblems(): boolean;
  clearProblems(): void;
  getProblems(): Problems | undefined;
  setProblems(value?: Problems): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProblemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProblemsRequest): UpdateProblemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProblemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProblemsRequest;
  static deserializeBinaryFromReader(message: UpdateProblemsRequest, reader: jspb.BinaryReader): UpdateProblemsRequest;
}

export namespace UpdateProblemsRequest {
  export type AsObject = {
    type: UpdateProblemsRequest.UpdateProblemsTypeMap[keyof UpdateProblemsRequest.UpdateProblemsTypeMap],
    problems?: Problems.AsObject,
    timestamp: number,
  }

  export interface UpdateProblemsTypeMap {
    ADD: 0;
    UPDATE: 1;
    REMOVE: 2;
  }

  export const UpdateProblemsType: UpdateProblemsTypeMap;
}

export class UpdateProblemsReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProblemsReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProblemsReply): UpdateProblemsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProblemsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProblemsReply;
  static deserializeBinaryFromReader(message: UpdateProblemsReply, reader: jspb.BinaryReader): UpdateProblemsReply;
}

export namespace UpdateProblemsReply {
  export type AsObject = {
  }
}

export class UpdateProblemHistoryRequest extends jspb.Message {
  getOption(): UpdateProblemHistoryRequest.UpdateProblemHistoryOptionMap[keyof UpdateProblemHistoryRequest.UpdateProblemHistoryOptionMap];
  setOption(value: UpdateProblemHistoryRequest.UpdateProblemHistoryOptionMap[keyof UpdateProblemHistoryRequest.UpdateProblemHistoryOptionMap]): void;

  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): ProblemHistory | undefined;
  setHistory(value?: ProblemHistory): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProblemHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProblemHistoryRequest): UpdateProblemHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProblemHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProblemHistoryRequest;
  static deserializeBinaryFromReader(message: UpdateProblemHistoryRequest, reader: jspb.BinaryReader): UpdateProblemHistoryRequest;
}

export namespace UpdateProblemHistoryRequest {
  export type AsObject = {
    option: UpdateProblemHistoryRequest.UpdateProblemHistoryOptionMap[keyof UpdateProblemHistoryRequest.UpdateProblemHistoryOptionMap],
    history?: ProblemHistory.AsObject,
  }

  export interface UpdateProblemHistoryOptionMap {
    NEW: 0;
    REPRACE: 1;
  }

  export const UpdateProblemHistoryOption: UpdateProblemHistoryOptionMap;
}

export class UpdateProblemHistoryReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProblemHistoryReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProblemHistoryReply): UpdateProblemHistoryReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProblemHistoryReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProblemHistoryReply;
  static deserializeBinaryFromReader(message: UpdateProblemHistoryReply, reader: jspb.BinaryReader): UpdateProblemHistoryReply;
}

export namespace UpdateProblemHistoryReply {
  export type AsObject = {
  }
}

