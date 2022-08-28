# RicoFresh
Your pocket Leetcode Flashcard - mobile app

## 0. Overview
This is an iOS mobile app for tech job seekers to manage code challenges. There are four modes: 
- Problem manager
- Flashcard
- Daily Challenge
- Problem CRUD


## 1. Tech Stack
Language
- Javascript

Database:
- Google Firebase

Libraries: 
- React Native
- react-native-gesture-handler
- react-native-ico-material-design

Dev tool:
- Expo
- Visual studio code

## 2. Intro to User Interface
### 2.1 Login and Register
Feature: Utilized Google Firebase to realize user authentification and registration

| Welcome Page  | Login Page | Register Page |
| ------------- | ------------- |------------- |
| <img src="https://user-images.githubusercontent.com/66397999/187083367-c9869482-24df-4b26-bd5e-fe9b1a959415.png" width="277" height="600"/>  | <img src="https://user-images.githubusercontent.com/66397999/187083373-dce227ac-e2df-440d-83fc-64c4eedabd67.png" width="277" height="600"/>  | <img src="https://user-images.githubusercontent.com/66397999/187083376-9401b800-2371-4a59-b6d3-1a5f51a5753a.png" width="277" height="600"/>  | 

### 2.2 Problem Manager
- A centralized manager for all code challenges a user has collected so far. 
- Scroll down to view code challenge.
- Tap on a problem snippet to view details of the problem
- Apply filters to see problem ofs interest. 

| Browse Problems  | Apply Filters |
| ------------- | ------------- |
| <video src="https://user-images.githubusercontent.com/66397999/187084833-c2d1dfcc-9db7-458f-abf9-15ce048729a8.mp4" width="277" height="600"/>| <video src="https://user-images.githubusercontent.com/66397999/187084837-98226c69-d92c-497b-9033-2c1c87f8c720.mp4" width="277" height="600"/>|
### 2.3 Flashcard
- User's familarity to a code challenge is recorded in the database. 
- Flashcard mode retrieves least familiar problems from the database. 
- User gesture: 
- - Swipe Left: I have no clue!
- - Swipe Right: This prob is easy!
- - Swipe Up : Do not show this problem again. 
<video src="https://user-images.githubusercontent.com/66397999/187084701-20cbcbeb-8f15-41b2-96dc-562c803d6622.mp4"/>

### 2.4 Daily Challenge
- Randomly pick a problem in the database.
- The problem should be finished within the time period specified on the screen. 
<img src="https://user-images.githubusercontent.com/66397999/187085142-05063b69-f3ac-4d4d-be9e-132c5798ef4a.png" width="277" height="600"/>

### 2.4 Create a New Problem

<img src="https://user-images.githubusercontent.com/66397999/187085070-cfd7a1f6-a8f9-4e4a-8b62-9d961a283f32.png" width="277" height="600"/>






