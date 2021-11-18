import axios from "axios";

import { GetProblemsReply, GetProblemsRequest, LoginReply, LoginRequest, Problems, UpdateProblemHistoryRequest, UpdateProblemsReply, UpdateProblemsRequest } from "./questions_pb";

abstract class RemoteClient {

  private ip: string
  private port: number

  /**
   * need "/"
   */
  private nameSpace: string


  constructor(ip: string, port: number, nameSpace: string){
    this.ip = ip
    this.port = port
    this.nameSpace = nameSpace
  }

  abstract loginRequest(id: number, word: string, replyHandler?: any): void

  abstract getProblemsRequest(
    category: string, 
    problemNum: number, 
    option: GetProblemsRequest.GetProblemsOptionMap[keyof GetProblemsRequest.GetProblemsOptionMap], 
    groupId?: number, 
    replyHandler?: any
  ): void

  abstract updateProblemsRequest(
    type: UpdateProblemHistoryRequest.UpdateProblemHistoryOptionMap[keyof UpdateProblemHistoryRequest.UpdateProblemHistoryOptionMap], 
    problems: Problems, 
    timestamp: number, 
    replyHandler?: any
  ): void

  abstract updateProblemHistoryRequest(option: any, history: any[], replyHandler?: any): void

  getBaseURL(): string{
    return "http://" + this.ip + ":" + this.port + "/" + this.nameSpace
  }

  getIp(): string{
    return this.ip
  }

  getPort(): number{
    return this.port
  }

  getNameSpace(): string{
    return this.nameSpace
  }

}


class RESTClient extends RemoteClient {

  loginRequest(id: number, word: string, replyHandler?: any): void {
    const req = new LoginRequest()
    req.setId(id)
    req.setWord(word)
    const param = {request: req.serializeBinary().toString()}
    this.get("user", param).then(res => {
      const rep = LoginReply.deserializeBinary(res.data)
      if(replyHandler){
        replyHandler(rep)
      }
    })
  }
  
  getProblemsRequest(category: string, problemNum: number, option: GetProblemsRequest.GetProblemsOptionMap[keyof GetProblemsRequest.GetProblemsOptionMap], groupId?: number, replyHandler?: any): void {
    const req = new GetProblemsRequest()
    req.setCategory(category)
    req.setProblemNumber(problemNum)
    req.setOption(option)
    if(groupId){
      req.setGroupId(groupId)
    }
    const param = {request: req.serializeBinary().toString()}
    this.get("problems", param).then(res => {
      const rep = GetProblemsReply.deserializeBinary(res.data)
      if(replyHandler){
        replyHandler(rep)
      }
    })
  }

  updateProblemsRequest(type: UpdateProblemHistoryRequest.UpdateProblemHistoryOptionMap[keyof UpdateProblemHistoryRequest.UpdateProblemHistoryOptionMap], problems: Problems, timestamp: number, replyHandler?: any): void {
    const req = new UpdateProblemsRequest()
    req.setType(type)
    req.setProblems(problems)
    req.setTimestamp(timestamp)
    this.post("problems", req).then(res => {
      const rep = UpdateProblemsReply.deserializeBinary(res.data)
      replyHandler(rep)
    })
  }

  updateProblemHistoryRequest(option: any, history: any[], replyHandler?: any): void {
    throw new Error("Method not implemented.");
  }

  private get(target: string, param?: Record<string, string>){
    const serchParam = new URLSearchParams(param)
    let url = this.getBaseURL() + target
    if(param){
      url += "?" + serchParam.toString()
    }
    return axios.get(url)
  }

  private post(target: string, data: any){
    return axios.post(this.getBaseURL() + target, data.serializeBinary())
  }
  
}