var app=new Vue({
		el:"#app",
		data:{
			
			menuActive:"802",
			menuAOpeneds:[],
			nowtimes:"23"
		},
		created: function() {
			var that=this;
			
		},
	    methods: {
			init:function(){
				
			},
			uppassSub:function(formName){
				this.$refs[formName].validate((valid) => {
				  if (valid) {
					var old=comm.sTrim(comm.uppassForm.oldpass)
					var newp=comm.sTrim(comm.uppassForm.newpass)
					var renewp=comm.sTrim(comm.uppassForm.repass)
					var query={
							old:old,
							newp:newp,
							renewp:renewp
						};
						$.ajax({
								  url: "/member/uppassto",
								  type: "post",
								  dataType: "json",
								  contentType: "application/json",
								  data:JSON.stringify(query),
								  success: function(data) {
									comm.uppassForm.newpass="";
									comm.uppassForm.oldpass="";
									comm.uppassForm.renewpass="";
									comm.uppassForm=false;
									this.$message.success("密码修改成功。请使用新密码重新登录！");
									setTimeout(function () {
										window.location.href="/member/loginout";
									}, 1500)
							   }.bind(this),
							   error:function(err){
								   //this.$message.error(JSON.parse(err.responseText).msg);
								}.bind(this)
							});
				  } else {
					return false;
				  }
				});
						
			},
			
			
		}
	})