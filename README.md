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

<img src="https://user-images.githubusercontent.com/66397999/187083367-c9869482-24df-4b26-bd5e-fe9b1a959415.png" width="277" height="600"/>
![simulator_screenshot_7BCECBEB-8228-4DB4-B4E6-B53AF6F3BE3A](https://user-images.githubusercontent.com/66397999/187084066-d34c83ba-3a13-4ed0-9566-81ccc94f325e.png)

![simulator_screenshot_F1A24554-26AB-461C-8D1D-2B772E2A35CF](https://user-images.githubusercontent.com/66397999/187084093-46fa1e58-cfe6-425d-aca5-cab4cff250f2.png)

![simulator_screenshot_7D44FA60-C7ED-4489-B54A-2DB821A57498](https://user-images.githubusercontent.com/66397999/187084105-fed772eb-dcbe-4484-8338-a958a5bc3f60.png)


### 2.3 Flashcard
- User's familarity to a code challenge is recorded in the database. 
- Flashcard mode retrieves least familiar problems from the database. 
- User gesture: 
- - Swipe Left: I have no clue!
- - Swipe Right: This prob is easy!
- - Swipe Up : Do not show this problem again. 













| Swipe Left - i dont know | Swipe Right - I know it! | Swipe Up - Never Show Again |
| ------------- | ------------- |------------- |
| <video src="https://user-images.githubusercontent.com/66397999/187084278-df6fbc16-ce18-4b33-ba46-941bc7832d81.mp4" />  | <video src="https://user-images.githubusercontent.com/66397999/187084444-47d64607-3662-4e8a-a8a1-2ba9dff17dcb.mp4" />  | <video src="https://user-images.githubusercontent.com/66397999/187084443-a866188f-1d3f-412b-bbe9-97f8018191e4.mp4" />  | 




