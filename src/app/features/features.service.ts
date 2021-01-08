import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../shared/response.model';
import { RepoResponseModel } from '../shared/reporesponse.model';
import { CommitResponseModel } from '../shared/commit-response.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  private baseUrl = environment.gitBaseUrl;
  private repoUrl = environment.repoBaseUrl;
  constructor(private http:HttpClient) { }

  getUser(username):Observable<ResponseModel>{
    return this.http.get<ResponseModel>(this.baseUrl + username);
  }

  getRepoOfUser(repoUrl):Observable<RepoResponseModel[]>{
    return this.http.get<RepoResponseModel[]>(repoUrl);
  }

  getRepoDetail(userName,repoName):Observable<RepoResponseModel>{
    return this.http.get<RepoResponseModel>(this.repoUrl + userName + "/" + repoName);
  }

  getCommitDetail(userName,repoName):Observable<CommitResponseModel[]>{
    return this.http.get<CommitResponseModel[]>(this.repoUrl + userName + "/" + repoName + "/commits");
  }
}
