"use strict";(self.webpackChunkvelzon=self.webpackChunkvelzon||[]).push([[938],{4938:(Q,b,o)=>{o.r(b),o.d(b,{AccountModule:()=>P});var f=o(6814),d=o(6223),u=o(7756),Z=o(7783),e=o(5904),U=o.n(e),h=o(4190),A=o(1374),t=o(9212),y=o(304),q=o(9862);let S=(()=>{class i{constructor(s){this.http=s}getAll(){return this.http.get("api/users")}register(s){return this.http.post("/users/register",s)}static{this.\u0275fac=function(l){return new(l||i)(t.LFG(q.eN))}}static{this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();const T=i=>({"is-invalid":i});let k=(()=>{class i{constructor(s,l,a,v){this.formBuilder=s,this.router=l,this.authenticationService=a,this.userService=v,this.submitted=!1,this.successmsg=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){this.signupForm=this.formBuilder.group({email:["",[d.kI.required,d.kI.email]],name:["",[d.kI.required]],password:["",d.kI.required]})}get f(){return this.signupForm.controls}onSubmit(){this.submitted=!0,this.authenticationService.register(this.f.email.value,this.f.name.value,this.f.password.value).pipe((0,A.P)()).subscribe(s=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/auth/login"])},s=>{this.error=s||""})}static{this.\u0275fac=function(l){return new(l||i)(t.Y36(d.QS),t.Y36(h.F0),t.Y36(y.$),t.Y36(S))}}static{this.\u0275cmp=t.Xpm({type:i,selectors:[["app-register"]],decls:86,vars:11,consts:[[1,"auth-page-wrapper","pt-5"],["id","auth-particles",1,"auth-one-bg-position","auth-one-bg"],[1,"bg-overlay"],[1,"shape"],["xmlns","http://www.w3.org/2000/svg","version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 1440 120"],["d","M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"],[1,"auth-page-content"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"text-center","mt-sm-5","mb-4","text-white-50"],["href","javascript:void(0);",1,"d-inline-block","auth-logo"],["src","assets/images/logo-light.png","alt","","height","20"],[1,"mt-3","fs-15","fw-medium"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6","col-xl-5"],[1,"card","mt-4"],[1,"card-body","p-4"],[1,"text-center","mt-2"],[1,"text-primary"],[1,"text-muted"],[1,"p-2","mt-4"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","useremail",1,"form-label"],[1,"text-danger"],["type","email","id","useremail","placeholder","Enter email address","required","","formControlName","email",1,"form-control",3,"ngClass"],[1,"invalid-feedback"],["for","username",1,"form-label"],["type","text","id","username","placeholder","Enter username","required","","formControlName","name",1,"form-control",3,"ngClass"],[1,"mb-2"],["for","userpassword",1,"form-label"],["type","password","id","userpassword","placeholder","Enter password","required","","formControlName","password",1,"form-control",3,"ngClass"],[1,"mb-4"],[1,"mb-0","fs-12","text-muted","fst-italic"],["href","javascript:void(0);",1,"text-primary","text-decoration-underline","fst-normal","fw-medium"],[1,"mt-4"],["type","submit",1,"btn","btn-success","w-100"],[1,"mt-4","text-center"],[1,"signin-other-title"],[1,"fs-13","mb-4","title","text-muted"],[1,"d-flex","gap-2","justify-content-center"],["type","button",1,"btn","btn-primary","btn-icon","waves-effect","waves-light"],[1,"ri-facebook-fill","fs-16"],["type","button",1,"btn","btn-danger","btn-icon","waves-effect","waves-light"],[1,"ri-google-fill","fs-16"],["type","button",1,"btn","btn-dark","btn-icon","waves-effect","waves-light"],[1,"ri-github-fill","fs-16"],["type","button",1,"btn","btn-info","btn-icon","waves-effect","waves-light"],[1,"ri-twitter-fill","fs-16"],[1,"mb-0"],["routerLink","/auth/login",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"footer"],[1,"text-center"],[1,"mb-0","text-muted"],[1,"mdi","mdi-heart","text-danger"]],template:function(l,a){1&l&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3),t.O4$(),t.TgZ(4,"svg",4),t._UZ(5,"path",5),t.qZA()()(),t.kcU(),t.TgZ(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div")(12,"a",11),t._UZ(13,"img",12),t.qZA()(),t.TgZ(14,"p",13),t._uU(15,"Premium Admin & Dashboard Template"),t.qZA()()()(),t.TgZ(16,"div",14)(17,"div",15)(18,"div",16)(19,"div",17)(20,"div",18)(21,"h5",19),t._uU(22,"Create New Account"),t.qZA(),t.TgZ(23,"p",20),t._uU(24,"Get your free velzon account now"),t.qZA()(),t.TgZ(25,"div",21)(26,"form",22),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(27,"div",23)(28,"label",24),t._uU(29,"Email "),t.TgZ(30,"span",25),t._uU(31,"*"),t.qZA()(),t._UZ(32,"input",26),t.TgZ(33,"div",27),t._uU(34," Please enter email "),t.qZA()(),t.TgZ(35,"div",23)(36,"label",28),t._uU(37,"Username "),t.TgZ(38,"span",25),t._uU(39,"*"),t.qZA()(),t._UZ(40,"input",29),t.TgZ(41,"div",27),t._uU(42," Please enter username "),t.qZA()(),t.TgZ(43,"div",30)(44,"label",31),t._uU(45,"Password "),t.TgZ(46,"span",25),t._uU(47,"*"),t.qZA()(),t._UZ(48,"input",32),t.TgZ(49,"div",27),t._uU(50," Please enter password "),t.qZA()(),t.TgZ(51,"div",33)(52,"p",34),t._uU(53,"By registering you agree to the Velzon "),t.TgZ(54,"a",35),t._uU(55,"Terms of Use"),t.qZA()()(),t.TgZ(56,"div",36)(57,"button",37),t._uU(58,"Sign Up"),t.qZA()(),t.TgZ(59,"div",38)(60,"div",39)(61,"h5",40),t._uU(62,"Create account with"),t.qZA()(),t.TgZ(63,"div",41)(64,"button",42),t._UZ(65,"i",43),t.qZA(),t.TgZ(66,"button",44),t._UZ(67,"i",45),t.qZA(),t.TgZ(68,"button",46),t._UZ(69,"i",47),t.qZA(),t.TgZ(70,"button",48),t._UZ(71,"i",49),t.qZA()()()()()()(),t.TgZ(72,"div",38)(73,"p",50),t._uU(74,"Already have an account ? "),t.TgZ(75,"a",51),t._uU(76," Signin "),t.qZA()()()()()()(),t.TgZ(77,"footer",52)(78,"div",7)(79,"div",8)(80,"div",9)(81,"div",53)(82,"p",54),t._uU(83),t._UZ(84,"i",55),t._uU(85," by Themesbrand"),t.qZA()()()()()()()),2&l&&(t.xp6(26),t.Q6J("formGroup",a.signupForm),t.xp6(6),t.Q6J("ngClass",t.VKq(5,T,a.submitted&&a.f.email.errors)),t.xp6(8),t.Q6J("ngClass",t.VKq(7,T,a.submitted&&a.f.name.errors)),t.xp6(8),t.Q6J("ngClass",t.VKq(9,T,a.submitted&&a.f.password.errors)),t.xp6(35),t.hij("\xa9 ",a.year," Velzon. Crafted with "))},dependencies:[f.mk,d._Y,d.Fj,d.JJ,d.JL,d.Q7,d.sg,d.u,h.rH]})}}return i})();var F=o(6192),J=o(9634);let x=(()=>{class i{constructor(){this.toasts=[]}show(s,l={}){this.toasts.push({textOrTpl:s,...l})}remove(s){this.toasts=this.toasts.filter(l=>l!==s)}static{this.\u0275fac=function(l){return new(l||i)}}static{this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Y=o(4221);function C(i,g){}function N(i,g){if(1&i&&t.YNc(0,C,0,0,"ng-template",3),2&i){const s=t.oxw().$implicit;t.Q6J("ngTemplateOutlet",s.textOrTpl)}}function z(i,g){if(1&i&&t._uU(0),2&i){const s=t.oxw().$implicit;t.Oqu(s.textOrTpl)}}function L(i,g){if(1&i){const s=t.EpF();t.TgZ(0,"ngb-toast",0),t.NdJ("hidden",function(){const v=t.CHM(s).$implicit,_=t.oxw();return t.KtG(_.toastService.remove(v))}),t.YNc(1,N,1,1,"ng-template",1)(2,z,1,1,"ng-template",null,2,t.W1O),t.qZA()}if(2&i){const s=g.$implicit,l=t.MAs(3),a=t.oxw();t.Tol(s.classname),t.Q6J("autohide",!0)("delay",s.delay||5e3),t.xp6(1),t.Q6J("ngIf",a.isTemplate(s))("ngIfElse",l)}}let B=(()=>{class i{constructor(s){this.toastService=s}isTemplate(s){return s.textOrTpl instanceof t.Rgc}static{this.\u0275fac=function(l){return new(l||i)(t.Y36(x))}}static{this.\u0275cmp=t.Xpm({type:i,selectors:[["app-toasts"]],hostAttrs:[1,"toast-container","position-fixed","top-0","end-0","p-3",2,"z-index","1200"],decls:2,vars:0,consts:[[3,"autohide","delay","hidden"],[3,"ngIf","ngIfElse"],["text",""],[3,"ngTemplateOutlet"],[3,"class","autohide","delay"]],template:function(l,a){1&l&&t.SjG(0,L,4,6,"ngb-toast",4,t.ikw),2&l&&t.wJu(a.toastService.toasts)},dependencies:[f.O5,f.tP,u.Iv],encapsulation:2})}}return i})();function I(i,g){1&i&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function n(i,g){1&i&&(t.TgZ(0,"div"),t._uU(1,"Email must be a valid email address "),t.qZA())}function c(i,g){if(1&i&&(t.TgZ(0,"div",58),t.YNc(1,I,2,0,"div")(2,n,2,0,"div"),t.qZA()),2&i){const s=t.oxw();t.xp6(1),t.um2(1,s.f.email.errors.required?1:-1),t.xp6(1),t.um2(2,s.f.email.errors.email?2:-1)}}function m(i,g){1&i&&(t.TgZ(0,"span"),t._uU(1,"Password is required"),t.qZA())}function p(i,g){if(1&i&&(t.TgZ(0,"div",58),t.YNc(1,m,2,0,"span"),t.qZA()),2&i){const s=t.oxw();t.xp6(1),t.um2(1,s.f.password.errors.required?1:-1)}}const r=i=>({"is-invalid":i}),w=(i,g)=>({"mdi-eye-off-outline":i,"mdi-eye-outline":g}),j=[{path:"signin",loadChildren:()=>Promise.resolve().then(o.bind(o,179)).then(i=>i.SigninModule)},{path:"signup",loadChildren:()=>o.e(620).then(o.bind(o,4620)).then(i=>i.SignupModule)},{path:"pass-reset",loadChildren:()=>o.e(62).then(o.bind(o,5062)).then(i=>i.PassResetModule)},{path:"pass-create",loadChildren:()=>o.e(603).then(o.bind(o,4603)).then(i=>i.PassCreateModule)},{path:"lockscreen",loadChildren:()=>o.e(855).then(o.bind(o,8855)).then(i=>i.LockscreenModule)},{path:"logout",loadChildren:()=>o.e(80).then(o.bind(o,2080)).then(i=>i.LogoutModule)},{path:"success-msg",loadChildren:()=>o.e(256).then(o.bind(o,9256)).then(i=>i.SuccessMsgModule)},{path:"twostep",loadChildren:()=>o.e(871).then(o.bind(o,7871)).then(i=>i.TwostepModule)},{path:"errors",loadChildren:()=>o.e(47).then(o.bind(o,4047)).then(i=>i.ErrorsModule)},{path:"register",component:k},{path:"login",component:(()=>{class i{constructor(s,l,a,v,_,V,O){this.formBuilder=s,this.authenticationService=l,this.router=a,this.authFackservice=v,this.route=_,this.toastService=V,this.store=O,this.submitted=!1,this.error="",this.year=(new Date).getFullYear(),this.authenticationService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){sessionStorage.getItem("currentUser")&&this.router.navigate(["/"]),this.loginForm=this.formBuilder.group({email:["admin@themesbrand.com",[d.kI.required,d.kI.email]],password:["123456",[d.kI.required]]})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.store.dispatch((0,F.x4)({email:this.f.email.value,password:this.f.password.value}))}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}static{this.\u0275fac=function(l){return new(l||i)(t.Y36(d.QS),t.Y36(y.$),t.Y36(h.F0),t.Y36(J.g),t.Y36(h.gz),t.Y36(x),t.Y36(Y.yh))}}static{this.\u0275cmp=t.Xpm({type:i,selectors:[["app-login"]],decls:78,vars:15,consts:[[1,"auth-page-wrapper","pt-5"],["id","auth-particles",1,"auth-one-bg-position","auth-one-bg"],[1,"bg-overlay"],[1,"shape"],["xmlns","http://www.w3.org/2000/svg","version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 1440 120"],["d","M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"],[1,"auth-page-content"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"text-center","mt-sm-5","mb-4","text-white-50"],["href","javascript:void(0);",1,"d-inline-block","auth-logo"],["src","assets/images/logo-light.png","alt","","height","20"],[1,"mt-3","fs-15","fw-medium"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6","col-xl-5"],[1,"card","mt-4"],[1,"card-body","p-4"],[1,"text-center","mt-2"],[1,"text-primary"],[1,"text-muted"],[1,"p-2","mt-4"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","username",1,"form-label"],["type","email","id","email","formControlName","email","placeholder","Enter email",1,"form-control",3,"ngClass"],["class","invalid-feedback"],[1,"float-end"],["routerLink","/pass-reset/basic",1,"text-muted"],["for","password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup","mb-3"],["placeholder","Enter password","id","password-input","formControlName","password",1,"form-control","pe-5",3,"type","ngClass"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted"],[1,"mdi","align-middle",3,"ngClass","click"],[1,"form-check"],["type","checkbox","value","","id","auth-remember-check",1,"form-check-input"],["for","auth-remember-check",1,"form-check-label"],[1,"mt-4"],["type","submit",1,"btn","btn-success","w-100"],[1,"mt-4","text-center"],[1,"signin-other-title"],[1,"fs-13","mb-4","title"],[1,"d-flex","gap-2","justify-content-center"],["type","button",1,"btn","btn-primary","btn-icon","waves-effect","waves-light"],[1,"ri-facebook-fill","fs-16"],["type","button",1,"btn","btn-danger","btn-icon","waves-effect","waves-light"],[1,"ri-google-fill","fs-16"],["type","button",1,"btn","btn-dark","btn-icon","waves-effect","waves-light"],[1,"ri-github-fill","fs-16"],["type","button",1,"btn","btn-info","btn-icon","waves-effect","waves-light"],[1,"ri-twitter-fill","fs-16"],[1,"mb-0"],["routerLink","/auth/register",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"footer"],[1,"text-center"],[1,"mb-0","text-muted"],[1,"mdi","mdi-heart","text-danger"],["aria-live","polite","aria-atomic","true"],[1,"invalid-feedback"]],template:function(l,a){1&l&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3),t.O4$(),t.TgZ(4,"svg",4),t._UZ(5,"path",5),t.qZA()()(),t.kcU(),t.TgZ(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div")(12,"a",11),t._UZ(13,"img",12),t.qZA()(),t.TgZ(14,"p",13),t._uU(15,"Premium Admin & Dashboard Template"),t.qZA()()()(),t.TgZ(16,"div",14)(17,"div",15)(18,"div",16)(19,"div",17)(20,"div",18)(21,"h5",19),t._uU(22,"Welcome Back !"),t.qZA(),t.TgZ(23,"p",20),t._uU(24,"Sign in to continue to Velzon."),t.qZA()(),t.TgZ(25,"div",21)(26,"form",22),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(27,"div",23)(28,"label",24),t._uU(29,"Email"),t.qZA(),t._UZ(30,"input",25),t.YNc(31,c,3,2,"div",26),t.qZA(),t.TgZ(32,"div",23)(33,"div",27)(34,"a",28),t._uU(35,"Forgot password?"),t.qZA()(),t.TgZ(36,"label",29),t._uU(37,"Password"),t.qZA(),t.TgZ(38,"div",30),t._UZ(39,"input",31),t.TgZ(40,"button",32)(41,"i",33),t.NdJ("click",function(){return a.toggleFieldTextType()}),t.qZA()(),t.YNc(42,p,2,1,"div",26),t.qZA()(),t.TgZ(43,"div",34),t._UZ(44,"input",35),t.TgZ(45,"label",36),t._uU(46,"Remember me"),t.qZA()(),t.TgZ(47,"div",37)(48,"button",38),t._uU(49,"Sign In"),t.qZA()(),t.TgZ(50,"div",39)(51,"div",40)(52,"h5",41),t._uU(53,"Sign In with"),t.qZA()(),t.TgZ(54,"div",42)(55,"button",43),t._UZ(56,"i",44),t.qZA(),t.TgZ(57,"button",45),t._UZ(58,"i",46),t.qZA(),t.TgZ(59,"button",47),t._UZ(60,"i",48),t.qZA(),t.TgZ(61,"button",49),t._UZ(62,"i",50),t.qZA()()()()()()(),t.TgZ(63,"div",39)(64,"p",51),t._uU(65,"Don't have an account ? "),t.TgZ(66,"a",52),t._uU(67," Signup "),t.qZA()()()()()()(),t.TgZ(68,"footer",53)(69,"div",7)(70,"div",8)(71,"div",9)(72,"div",54)(73,"p",55),t._uU(74),t._UZ(75,"i",56),t._uU(76," by Themesbrand"),t.qZA()()()()()()(),t._UZ(77,"app-toasts",57)),2&l&&(t.xp6(26),t.Q6J("formGroup",a.loginForm),t.xp6(4),t.Q6J("ngClass",t.VKq(8,r,a.submitted&&a.f.email.errors)),t.xp6(1),t.um2(31,a.submitted&&a.f.email.errors?31:-1),t.xp6(8),t.Q6J("type",a.fieldTextType?"text":"password")("ngClass",t.VKq(10,r,a.submitted&&a.f.password.errors)),t.xp6(2),t.Q6J("ngClass",t.WLB(12,w,!a.fieldTextType,a.fieldTextType)),t.xp6(1),t.um2(42,a.submitted&&a.f.password.errors?42:-1),t.xp6(32),t.hij("\xa9 ",a.year," Velzon. Crafted with "))},dependencies:[f.mk,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,h.rH,B]})}}return i})()}];let M=(()=>{class i{static{this.\u0275fac=function(l){return new(l||i)}}static{this.\u0275mod=t.oAB({type:i})}static{this.\u0275inj=t.cJS({imports:[h.Bz.forChild(j),h.Bz]})}}return i})();var E=o(179);let P=(()=>{class i{constructor(){(0,Z.Nk)(U().loadAnimation)}static{this.\u0275fac=function(l){return new(l||i)}}static{this.\u0275mod=t.oAB({type:i})}static{this.\u0275inj=t.cJS({imports:[f.ez,d.UX,d.u5,u.aE,M,E.SigninModule]})}}return i})()},179:(Q,b,o)=>{o.r(b),o.d(b,{SigninModule:()=>I});var f=o(6814),d=o(7756),u=o(6223),Z=o(4190),e=o(9212);function U(n,c){1&n&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function h(n,c){if(1&n&&(e.TgZ(0,"div",58),e.YNc(1,U,2,0,"div"),e.qZA()),2&n){const m=e.oxw();e.xp6(1),e.um2(1,m.f.name.errors.required?1:-1)}}function A(n,c){1&n&&(e.TgZ(0,"div",59)(1,"span"),e._uU(2,"Password is required"),e.qZA()())}const t=n=>({"is-invalid":n}),y=(n,c)=>({"mdi-eye-off-outline":n,"mdi-eye-outline":c});function S(n,c){1&n&&(e.TgZ(0,"div",57)(1,"div",58)(2,"p",59),e._uU(3,'" Great! Clean code, clean design, easy for customization. Thanks very much! "'),e.qZA()()())}function T(n,c){1&n&&(e.TgZ(0,"div",57)(1,"div",58)(2,"p",59),e._uU(3,'" The theme is really great with an amazing customer support."'),e.qZA()()())}function k(n,c){1&n&&(e.TgZ(0,"div",57)(1,"div",58)(2,"p",59),e._uU(3,'" Great! Clean code, clean design, easy for customization. Thanks very much! "'),e.qZA()()())}function F(n,c){1&n&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function J(n,c){if(1&n&&(e.TgZ(0,"div",60),e.YNc(1,F,2,0,"div"),e.qZA()),2&n){const m=e.oxw();e.xp6(1),e.um2(1,m.f.name.errors.required?1:-1)}}function x(n,c){1&n&&(e.TgZ(0,"span"),e._uU(1,"Password is required"),e.qZA())}function Y(n,c){if(1&n&&(e.TgZ(0,"div",61),e.YNc(1,x,2,0,"span"),e.qZA()),2&n){const m=e.oxw();e.xp6(1),e.um2(1,m.f.password.errors.required?1:-1)}}const C=n=>({"is-invalid":n}),N=(n,c)=>({"mdi-eye-off-outline":n,"mdi-eye-outline":c}),L=[{path:"basic",component:(()=>{class n{constructor(m){this.formBuilder=m,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){this.loginForm=this.formBuilder.group({name:["",[u.kI.required]],password:["",u.kI.required]})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}static{this.\u0275fac=function(p){return new(p||n)(e.Y36(u.QS))}}static{this.\u0275cmp=e.Xpm({type:n,selectors:[["app-basic"]],decls:77,vars:15,consts:[[1,"auth-page-wrapper","pt-5"],["id","auth-particles",1,"auth-one-bg-position","auth-one-bg"],[1,"bg-overlay"],[1,"shape"],["xmlns","http://www.w3.org/2000/svg","version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 1440 120"],["d","M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"],[1,"auth-page-content"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"text-center","mt-sm-5","mb-4","text-white-50"],["routerLink","",1,"d-inline-block","auth-logo"],["src","assets/images/logo-light.png","alt","","height","20"],[1,"mt-3","fs-15","fw-medium"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6","col-xl-5"],[1,"card","mt-4"],[1,"card-body","p-4"],[1,"text-center","mt-2"],[1,"text-primary"],[1,"text-muted"],[1,"p-2","mt-4"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","username",1,"form-label"],["type","text","id","username","placeholder","Enter username","formControlName","name",1,"form-control",3,"ngClass"],["class","invalid-feedback","align","left"],[1,"float-end"],["routerLink","/auth/pass-reset/basic",1,"text-muted"],["for","password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup","mb-3"],["placeholder","Enter password","id","password-input","formControlName","password",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],[1,"mdi","align-middle",3,"ngClass","click"],["class","invalid-feedback"],[1,"form-check"],["type","checkbox","value","","id","auth-remember-check",1,"form-check-input"],["for","auth-remember-check",1,"form-check-label"],[1,"mt-4"],["type","submit",1,"btn","btn-success","w-100"],[1,"mt-4","text-center"],[1,"signin-other-title"],[1,"fs-13","mb-4","title"],[1,"d-flex","gap-2","justify-content-center"],["type","button",1,"btn","btn-primary","btn-icon","waves-effect","waves-light"],[1,"ri-facebook-fill","fs-16"],["type","button",1,"btn","btn-danger","btn-icon","waves-effect","waves-light"],[1,"ri-google-fill","fs-16"],["type","button",1,"btn","btn-dark","btn-icon","waves-effect","waves-light"],[1,"ri-github-fill","fs-16"],["type","button",1,"btn","btn-info","btn-icon","waves-effect","waves-light"],[1,"ri-twitter-fill","fs-16"],[1,"mb-0"],["routerLink","/auth/signup/basic",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"footer"],[1,"text-center"],[1,"mb-0","text-muted"],[1,"mdi","mdi-heart","text-danger"],["align","left",1,"invalid-feedback"],[1,"invalid-feedback"]],template:function(p,r){1&p&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3),e.O4$(),e.TgZ(4,"svg",4),e._UZ(5,"path",5),e.qZA()()(),e.kcU(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div")(12,"a",11),e._UZ(13,"img",12),e.qZA()(),e.TgZ(14,"p",13),e._uU(15,"Premium Admin & Dashboard Template"),e.qZA()()()(),e.TgZ(16,"div",14)(17,"div",15)(18,"div",16)(19,"div",17)(20,"div",18)(21,"h5",19),e._uU(22,"Welcome Back !"),e.qZA(),e.TgZ(23,"p",20),e._uU(24,"Sign in to continue to Velzon."),e.qZA()(),e.TgZ(25,"div",21)(26,"form",22),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(27,"div",23)(28,"label",24),e._uU(29,"Username"),e.qZA(),e._UZ(30,"input",25),e.YNc(31,h,2,1,"div",26),e.qZA(),e.TgZ(32,"div",23)(33,"div",27)(34,"a",28),e._uU(35,"Forgot password?"),e.qZA()(),e.TgZ(36,"label",29),e._uU(37,"Password"),e.qZA(),e.TgZ(38,"div",30),e._UZ(39,"input",31),e.TgZ(40,"button",32)(41,"i",33),e.NdJ("click",function(){return r.toggleFieldTextType()}),e.qZA()(),e.YNc(42,A,3,0,"div",34),e.qZA()(),e.TgZ(43,"div",35),e._UZ(44,"input",36),e.TgZ(45,"label",37),e._uU(46,"Remember me"),e.qZA()(),e.TgZ(47,"div",38)(48,"button",39),e._uU(49,"Sign In"),e.qZA()(),e.TgZ(50,"div",40)(51,"div",41)(52,"h5",42),e._uU(53,"Sign In with"),e.qZA()(),e.TgZ(54,"div",43)(55,"button",44),e._UZ(56,"i",45),e.qZA(),e.TgZ(57,"button",46),e._UZ(58,"i",47),e.qZA(),e.TgZ(59,"button",48),e._UZ(60,"i",49),e.qZA(),e.TgZ(61,"button",50),e._UZ(62,"i",51),e.qZA()()()()()()(),e.TgZ(63,"div",40)(64,"p",52),e._uU(65,"Don't have an account ? "),e.TgZ(66,"a",53),e._uU(67," Signup "),e.qZA()()()()()()(),e.TgZ(68,"footer",54)(69,"div",7)(70,"div",8)(71,"div",9)(72,"div",55)(73,"p",56),e._uU(74),e._UZ(75,"i",57),e._uU(76," by Themesbrand"),e.qZA()()()()()()()),2&p&&(e.xp6(26),e.Q6J("formGroup",r.loginForm),e.xp6(4),e.Q6J("ngClass",e.VKq(8,t,r.submitted&&r.f.name.errors)),e.xp6(1),e.um2(31,r.submitted&&r.f.name.errors?31:-1),e.xp6(8),e.Q6J("type",r.fieldTextType?"text":"password")("ngClass",e.VKq(10,t,r.submitted&&r.f.password.errors)),e.xp6(2),e.Q6J("ngClass",e.WLB(12,y,!r.fieldTextType,r.fieldTextType)),e.xp6(1),e.um2(42,r.submitted&&r.f.password.errors?42:-1),e.xp6(32),e.hij("\xa9 ",r.year," Velzon. Crafted with "))},dependencies:[f.mk,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,Z.rH]})}}return n})()},{path:"cover",component:(()=>{class n{constructor(m){this.formBuilder=m,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){this.loginForm=this.formBuilder.group({name:["",[u.kI.required]],password:["",u.kI.required]})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}static{this.\u0275fac=function(p){return new(p||n)(e.Y36(u.QS))}}static{this.\u0275cmp=e.Xpm({type:n,selectors:[["app-cover"]],decls:81,vars:16,consts:[[1,"auth-page-wrapper","auth-bg-cover","py-5","d-flex","justify-content-center","align-items-center","min-vh-100"],[1,"bg-overlay"],[1,"auth-page-content","overflow-hidden","pt-lg-5"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"card","overflow-hidden"],[1,"row","g-0"],[1,"col-lg-6"],[1,"p-lg-5","p-4","auth-one-bg","h-100"],[1,"position-relative","h-100","d-flex","flex-column"],[1,"mb-4"],["routerLink","",1,"d-block"],["src","assets/images/logo-light.png","alt","","height","18"],[1,"mt-auto"],[1,"mb-3"],[1,"ri-double-quotes-l","display-4","text-success"],[3,"showNavigationArrows"],["ngbSlide",""],[1,"p-lg-5","p-4"],[1,"text-primary"],[1,"text-muted"],[1,"mt-4"],[3,"formGroup","ngSubmit"],["for","username",1,"form-label"],["type","text","id","username","placeholder","Enter username","formControlName","name",1,"form-control",3,"ngClass"],["class","invalid-feedback","align","left"],[1,"float-end"],["routerLink","/auth/pass-reset/cover",1,"text-muted"],["for","password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup","mb-3"],["placeholder","Enter password","id","password-input","formControlName","password",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],[1,"mdi","align-middle",3,"ngClass","click"],["class","invalid-feedback"],[1,"form-check"],["type","checkbox","value","","id","auth-remember-check",1,"form-check-input"],["for","auth-remember-check",1,"form-check-label"],["type","submit",1,"btn","btn-success","w-100"],[1,"mt-4","text-center"],[1,"signin-other-title"],[1,"fs-13","mb-4","title"],[1,"d-flex","gap-2","justify-content-center"],["type","button",1,"btn","btn-primary","btn-icon","waves-effect","waves-light"],[1,"ri-facebook-fill","fs-16"],["type","button",1,"btn","btn-danger","btn-icon","waves-effect","waves-light"],[1,"ri-google-fill","fs-16"],["type","button",1,"btn","btn-dark","btn-icon","waves-effect","waves-light"],[1,"ri-github-fill","fs-16"],["type","button",1,"btn","btn-info","btn-icon","waves-effect","waves-light"],[1,"ri-twitter-fill","fs-16"],[1,"mt-5","text-center"],[1,"mb-0"],["routerLink","/auth/signup/cover",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"footer"],[1,"text-center"],[1,"mdi","mdi-heart","text-danger"],[1,"carousel-inner","text-center","text-white-50","pb-5"],[1,"carousel-item","active"],[1,"fs-15","fst-italic"],["align","left",1,"invalid-feedback"],[1,"invalid-feedback"]],template:function(p,r){1&p&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9),e._UZ(10,"div",1),e.TgZ(11,"div",10)(12,"div",11)(13,"a",12),e._UZ(14,"img",13),e.qZA()(),e.TgZ(15,"div",14)(16,"div",15),e._UZ(17,"i",16),e.qZA(),e.TgZ(18,"ngb-carousel",17),e.YNc(19,S,4,0,"ng-template",18)(20,T,4,0,"ng-template",18)(21,k,4,0,"ng-template",18),e.qZA()()()()(),e.TgZ(22,"div",8)(23,"div",19)(24,"div")(25,"h5",20),e._uU(26,"Welcome Back !"),e.qZA(),e.TgZ(27,"p",21),e._uU(28,"Sign in to continue to Velzon."),e.qZA()(),e.TgZ(29,"div",22)(30,"form",23),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(31,"div",15)(32,"label",24),e._uU(33,"Username"),e.qZA(),e._UZ(34,"input",25),e.YNc(35,J,2,1,"div",26),e.qZA(),e.TgZ(36,"div",15)(37,"div",27)(38,"a",28),e._uU(39,"Forgot password?"),e.qZA()(),e.TgZ(40,"label",29),e._uU(41,"Password"),e.qZA(),e.TgZ(42,"div",30),e._UZ(43,"input",31),e.TgZ(44,"button",32)(45,"i",33),e.NdJ("click",function(){return r.toggleFieldTextType()}),e.qZA()(),e.YNc(46,Y,2,1,"div",34),e.qZA()(),e.TgZ(47,"div",35),e._UZ(48,"input",36),e.TgZ(49,"label",37),e._uU(50,"Remember me"),e.qZA()(),e.TgZ(51,"div",22)(52,"button",38),e._uU(53,"Sign In"),e.qZA()(),e.TgZ(54,"div",39)(55,"div",40)(56,"h5",41),e._uU(57,"Sign In with"),e.qZA()(),e.TgZ(58,"div",42)(59,"button",43),e._UZ(60,"i",44),e.qZA(),e.TgZ(61,"button",45),e._UZ(62,"i",46),e.qZA(),e.TgZ(63,"button",47),e._UZ(64,"i",48),e.qZA(),e.TgZ(65,"button",49),e._UZ(66,"i",50),e.qZA()()()()(),e.TgZ(67,"div",51)(68,"p",52),e._uU(69,"Don't have an account ? "),e.TgZ(70,"a",53),e._uU(71," Signup"),e.qZA()()()()()()()()()()(),e.TgZ(72,"footer",54)(73,"div",3)(74,"div",4)(75,"div",5)(76,"div",55)(77,"p",52),e._uU(78),e._UZ(79,"i",56),e._uU(80," by Themesbrand"),e.qZA()()()()()()()),2&p&&(e.xp6(18),e.Q6J("showNavigationArrows",r.showNavigationArrows),e.xp6(12),e.Q6J("formGroup",r.loginForm),e.xp6(4),e.Q6J("ngClass",e.VKq(9,C,r.submitted&&r.f.name.errors)),e.xp6(1),e.um2(35,r.submitted&&r.f.name.errors?35:-1),e.xp6(8),e.Q6J("type",r.fieldTextType?"text":"password")("ngClass",e.VKq(11,C,r.submitted&&r.f.password.errors)),e.xp6(2),e.Q6J("ngClass",e.WLB(13,N,!r.fieldTextType,r.fieldTextType)),e.xp6(1),e.um2(46,r.submitted&&r.f.password.errors?46:-1),e.xp6(32),e.hij("\xa9 ",r.year," Velzon. Crafted with "))},dependencies:[f.mk,d.uo,d.xl,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,Z.rH]})}}return n})()}];let B=(()=>{class n{static{this.\u0275fac=function(p){return new(p||n)}}static{this.\u0275mod=e.oAB({type:n})}static{this.\u0275inj=e.cJS({imports:[Z.Bz.forChild(L),Z.Bz]})}}return n})(),I=(()=>{class n{static{this.\u0275fac=function(p){return new(p||n)}}static{this.\u0275mod=e.oAB({type:n})}static{this.\u0275inj=e.cJS({imports:[f.ez,d.mH,u.UX,u.u5,B]})}}return n})()}}]);