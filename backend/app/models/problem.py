from abc import ABCMeta, abstractmethod
from typing import Any

from app.api.questions_pb2 import User, GetProblemsRequest, GetProblemsReply, UpdateProblemHistoryRequest, UpdateProblemsReply, UpdateProblemsRequest, UpdateProblemHistoryReply, Problems, ProblemHistory


class ProblemManagerBase(metaclass=ABCMeta):

    def __init__(self):
        pass

    @abstractmethod
    def get_problems(self, user: User, get_problems_request: GetProblemsRequest) -> GetProblemsReply:
        raise NotImplementedError

    @abstractmethod
    def update_problems(self, user: User, update_problems_request: UpdateProblemsRequest) -> UpdateProblemsReply:
        raise NotImplementedError

    @abstractmethod
    def update_problem_history(self, user: User, update_problem_history_request: UpdateProblemHistoryRequest) -> UpdateProblemHistoryReply:
        raise NotImplementedError


class ProblemManagerWithFile(ProblemManagerBase):

    def __init__(self):
        super().__init__()
        self._problems: dict[int, Problems] = {}
        self._problem_history: dict[int, ProblemHistory] = {}
        self._file_prefix = "problems-"

    def get_problems(self, user: User, get_problems_request: GetProblemsRequest) -> GetProblemsReply:
        rep = GetProblemsReply()
        problems = self._problems[user.id]
        raise NotImplementedError

    def update_problems(self, user: User, update_problems_request: UpdateProblemsRequest) -> UpdateProblemsReply:
        rep = UpdateProblemsReply()
        problems = self._problems[user.id]
        raise NotImplementedError

    def update_problem_history(self, user: User, update_problem_history_request: UpdateProblemHistoryRequest) -> UpdateProblemHistoryReply:
        raise NotImplementedError

    def _load_problems(self, user):
        pass

    def _dump_problems(self, user):
        pass

    def _load_problem_history(self, user):
        pass

    def _dump_problem_history(self, user):
        pass

pm_file = ProblemManagerWithFile()
