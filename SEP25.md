# 9월25일 과제 - JWT적용 #
```jsx
// users.js

const express = require("express")
const router = express.Router()
const conn = reqeuire("../mariadb")
const {body, param, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

router.use(express.json())

const validate  = (req,res,next) => {
			const err = validationResult(req)
			
			if (err.isEmpty()) {
					return next(); // 다음 할일(미들웨어, 함수)
			} else {
					return res.status(400).json(err.array())
			}
			
}

router.post(
		"/login", 
		[
				body("email").notEmpty().isEmail().withMessage("이메일을 확인이 필요합니다"),
				body("password").notEmpty().isString().withMessage("비밀번호 확인이 필요합니다"),
				validate
		],
		fucnction(req,res) {
		const {email, password} = req.body
		
		let sql = `SELECT * FROM users WHERE email = ?`
		conn.query(sql, email,
				function(err,results) {
				  if(results.affectedRows == 0){
										 return res.status(400).end()
					}
					
					let loginUser = results[0]
					
					if(loginUser && loginUser.password == password)
							//token 발급
					    const token = jwt.sign({
							    email :loginUser.email,
							    name : loginUser.name
							   }, process.env.PRIVATE_KEY, {
									   expiresIn : "20m",
									   issuer : "jinyong"
							   });
							
							res.cookie("token", token, {
										httpOnly : true
								})
							
							res.status(200).json({
									message : `${loginUser.name}님 로그인 되었습니다`
							})
							} else {
									res.status(404).json({
									message : "이메일 또는 비밀번호가 잘못되었습니다"
								})
							}
						}
					}
				})
				
	router.post(
		"/join", 
		[
				body("email").notEmpty().isEmail().withMessage("이메일을 확인이 필요합니다"),
				body("name").notEmpty().isString().withMessage("이름 확인이 필요합니다"),
				body("password").notEmpty().isString().withMessage("비밀번호 확인이 필요합니다"),
				body("contact").notEmpty().isString().withMessage("연락처 확인이 필요합니다"),
				validate
		],
		
		function(req,res) {
		if(req.body =={}) {
				res.status(400).json({
					message: "입력된 값을 다시 확인해주세요"
					})
				} else {
					const {email, name, password, contact} = req.body
					
					let sql = `INSERT INTO users (email, name, password) VALUES `
					let values = [email, name, password, contact]
					conn.query(sql, values,
							function(err,results) {
									res.status(201).json(results)
							}
						)
					}
				})
				
				
			router
				.route("/users")
				.get(
				[
				body("email").notEmpty().isEmail().withMessage("이메일을 확인이 필요합니다"),
				validate
		    ],
		
		function(req,res) {
		 let {email} = req.body
		 
		 let sql = `SELECT * FROM users WHERE email`
		 conn.query(sql, email,
				 function(err,results) {
						 if(results.affectedRows == 0){
										 return res.status(400).end()
									}
						 res.status(200).json(results)
						}
					)
			})
		
		.delete(
		[
				body("email").notEmpty().isEmail().withMessage("이메일을 확인이 필요합니다"),
				validate
		 ],
		 
			 function(req,res) {
					 let {email} = req.body
					 
					 let sql = `DELETE FROM users WHERE email =`
					 
					 conn.query (sql, email,
							 function(err,results) {
									 if(err) {
										 return res.status(400).end()
									 }
									 
									 if(results.affectedRows == 0){
										 return res.status(400).end()
									} else {
									
										res.status(200).json(results)
									}
									 
								}
							);
					})
					
			module.exports = router
```

결과
![image](https://github.com/user-attachments/assets/d14b9877-9f92-48a9-bd4c-a65459e79230)
