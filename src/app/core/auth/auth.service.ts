import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode";
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURl = environment.baseUrl;
  constructor(private http:HttpClient,public  afAuth:  AngularFireAuth) { }

  signUpUser(payload){
     return this.afAuth.createUserWithEmailAndPassword(payload.email, payload.password);
  }

  signInUser(payload){
    return this.afAuth.signInWithEmailAndPassword(payload.email, payload.password);
  }

  async signOut(){
    await  this.afAuth.signOut();
     localStorage.clear();
  }

  setToken(token){
     localStorage.setItem('token',token);
  }

  getToken(){
     return localStorage.getItem('token');
  }

  // getUser(){
  //      let token = localStorage.getItem('token');
  //      if(token){
  //       return jwt_decode(token,{header:true});
  //      }
  // }
}
