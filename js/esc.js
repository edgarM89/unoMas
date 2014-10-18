$(document).on("ready",function(){
//arreglo principal	
var casillas =  new Array(5);
//arreglo para actualizaciones
var casillas2 = new Array(5);
var sumador;
var tiempo;
for (var i = 0; i < 26; i++) {
	casillas[i]=0;
};

for (var i = 0; i < 26; i++) {
	casillas2[i]=0;
};
var celdas;
var cont=0;
var bandera=0;
celdas = new Array();
for (var i = 0; i < 25; i++) {
	celdas[i]="#cel"+(i+1);
};

$("#cel1").click(function(){
		$("#cel1").css("background","black")
		casillas[0]=1;	
		casillas2[0]=1;
	});	
$("#cel2").click(function(){
		$("#cel2").css("background","black")
		casillas[1]=1;	
		casillas2[1]=1;
	});
$("#cel3").click(function(){
		$("#cel3").css("background","black")
		casillas[2]=1;	
		casillas2[2]=1
	});
$("#cel4").click(function(){
		$("#cel4").css("background","black")
		casillas[3]=1;	
		casillas2[3]=1;
	});
$("#cel5").click(function(){
		$("#cel5").css("background","black")
		casillas[4]=1;	
	});
$("#cel6").click(function(){
		$("#cel6").css("background","black")
		casillas[5]=1;	
		casillas2[5]=1;
	});
$("#cel7").click(function(){
		$("#cel7").css("background","black")
		casillas[6]=1;
		casillas2[6]=1;	
	});
$("#cel8").click(function(){
		$("#cel8").css("background","black")
		casillas[7]=1;	
		casillas2[7]=1;
	});
$("#cel9").click(function(){
		$("#cel9").css("background","black")
		casillas[8]=1;
		casillas2[8]=1	
	});
$("#cel10").click(function(){
		$("#cel10").css("background","black")
		casillas[9]=1;
		casillas2[9]=1;	
	});
$("#cel11").click(function(){
		$("#cel11").css("background","black")
		casillas[10]=1;	
		casillas2[10]=1;
	});
$("#cel12").click(function(){
		$("#cel12").css("background","black")
		casillas[11]=1;	
		casillas2[11]=1;
	});
$("#cel13").click(function(){
		$("#cel13").css("background","black")
		casillas[12]=1;
		casillas2[12]=1;	
	});
$("#cel14").click(function(){
		$("#cel14").css("background","black")
		casillas[13]=1;	
		casillas2[13]=1;
	});
$("#cel15").click(function(){
		$("#cel15").css("background","black")
		casillas[14]=1;	
		casillas2[14]=1;
	});
$("#cel16").click(function(){
		$("#cel16").css("background","black")
		casillas[15]=1;	
		casillas2[15]=1
	});
$("#cel17").click(function(){
		$("#cel17").css("background","black")
		casillas[16]=1;	
		casillas2[17]=1;
	});
$("#cel18").click(function(){
		$("#cel18").css("background","black")
		casillas[17]=1;	
		casillas2[17]=1;
	});
$("#cel19").click(function(){
		$("#cel19").css("background","black")
		casillas[18]=1;	
		casillas2[18]=1;
	});
$("#cel20").click(function(){
		$("#cel20").css("background","black")
		casillas[19]=1;	
		casillas2[19]=1;
	});
$("#cel21").click(function(){
		$("#cel21").css("background","black")
		casillas[20]=1;	
		casillas2[20]=1;
	});
$("#cel22").click(function(){
		$("#cel22").css("background","black")
		casillas[21]=1;	
		casillas2[21]=1;
	});
$("#cel23").click(function(){
		$("#cel23").css("background","black")
		casillas[22]=1;	
		casillas2[22]=1;
	});
$("#cel24").click(function(){
		$("#cel24").css("background","black")
		casillas[23]=1;	
		casillas2[23]=1;
	});
$("#cel25").click(function(){
		$("#cel25").css("background","black")
		casillas[24]=1;	
		casillas2[24]=1;
	});


function todo(){
	//setTimeout( Funci , Tiempo );


	if (bandera==1) {
		for (var i = 0; i < casillas2.length; i++) {
				casillas[i]=casillas2[i];
			}
	}
	for (var i = 0; i < casillas.length; i++) {
		//esquinaa*********************
		if(i==0){
			sumador=casillas[1]+casillas[5]+casillas[6];
			//sumador=sumador+1;

			if (sumador<2 || sumador>3) {
				$("#cel1").css("background","white")
				sumador=0;
				casillas2[i]=0;
			}
			else if (sumador==3) {
				
				$("#cel1").css("background","black")
				sumador=0;
				casillas2[i]=1;
			}
			else if (sumador==2) {
				sumador=0;
				casillas2[i]=casillas[i];
			};
		}
		// parte media superior
		else if (i==1 || i==2 || i==3) {
			sumador=casillas[i-1]+casillas[i+1]+casillas[i+4]+casillas[i+5]+casillas[i+6];
			
			if (sumador<2 || sumador>3) {
				if (i==1) {
					$("#cel2").css("background","white")
					sumador=0;
					casillas2[i]=0;
				}
				else if(i==2){
					$("#cel3").css("background","white")
					sumador=0;
					casillas2[i]=0;
				}
				else if (i==3) {
					$("#cel4").css("background","white")
					sumador=0;
					casillas2[i]=0;
				}
			}
			else if (sumador==3) {
				if (i==1) {
					$("#cel2").css("background","black")
					sumador=0;
					casillas2[i]=1;
				}
				else if (i==2) {
					$("#cel3").css("background","black")
					sumador=0;
					casillas2[i]=1;
				}
					else if (i==3) {
						$("#cel4").css("background","black")
						sumador=0;
						casillas2[i]=1;
					}

				
			}
			else if (sumador==2) {
				sumador=0;
				casillas2[i]=casillas[i];
			};
			
		}
		//esquina derecha superior
		else if (i==4) {
			sumador=casillas[3]+casillas[8]+casillas[9];
			
			if (sumador<2 || sumador>3) {
				$("#cel5").css("background","white")
				sumador=0;
				casillas2[i]=0;
			}
			else if (sumador==3) {
				$("#cel5").css("background","black")
				sumador=0;
				casillas2[i]=1;
			}
			else if (sumador==2) {
				sumador=0;
				casillas2[i]=casillas[i];
			};
		
		}
		//medios izquierda***************************************
		else if (i==5 || i==10 || i==15) {
			sumador=casillas[i-5]+casillas[i-4]+casillas[i+1]+casillas[i+5]+casillas[i+6];
			
			if (sumador<2 || sumador>3) {
				if (i==5) {
					$("#cel6").css("background","white")
				sumador=0;
				casillas2[i]=0;
				}
				if (i==10) {
					$("#cel11").css("background","white")
				sumador=0;
				casillas2[i]=0;
				}
				if (i==15) {
					$("#cel16").css("background","white")
				sumador=0;
				casillas2[i]=0;
			}
				
			}
			else if (sumador==3) {
				if (i==5) {
					$("#cel6").css("background","black")
				sumador=0;
				casillas2[i]=1;
				}
				if (i==10) {
					$("#cel11").css("background","black")
				sumador=0;
				casillas2[i]=1;
				}
				if (i==15) {
					$("#cel16").css("background","black")
				sumador=0;
				casillas2[i]=1;
				}
			}
			else if (sumador==2) {
				sumador=0;
				casillas2[i]=casillas[i];
			};
		
		}
		/////////////////////////////////////////////////////////////////////centro*****
		else if (i==6 || i==7 || i==8 || i==11 || i==12 || i==13 || i==16 || i==17 || i==18) {
			sumador=casillas[i-6]+casillas[i-5]+casillas[i-4]+casillas[i-1]+casillas[i+1]+casillas[i+4]+casillas[i+5]+casillas[i+6];
			if (sumador<2 || sumador>3) {
				if (i==6) {
					$("#cel7").css("background","white")
				sumador=0;
				casillas2[i]=0;
				}
					else if (i==7) {
						$("#cel8").css("background","white")
				sumador=0;
				casillas2[i]=0;
					}
						else if (i==8) {
							$("#cel9").css("background","white")
							sumador=0;
							casillas2[i]=0;
						}
						else if (i==11) {
					$("#cel12").css("background","white")
					sumador=0;
					casillas2[i]=0;
			}
					else if (i==12) {
						$("#cel13").css("background","white")
						sumador=0;
						casillas2[i]=0;
					}
						else if(i==13){
							$("#cel14").css("background","white")
							sumador=0;
							casillas2[i]=0;
						}
						else if (i==16) {
					$("#cel17").css("background","white")
				sumador=0;
				casillas2[i]=0;
				}
					else if (i==17) {
						$("#cel18").css("background","white")
				sumador=0;
				casillas2[i]=0;
					}
						else if (i==18) {
							$("#cel19").css("background","white")
				sumador=0;
				casillas2[i]=0;
						}
						
			}
			else if (sumador==3) {
				if (i==6) {
					$("#cel7").css("background","black")
						sumador=0;
						casillas2[i]=1;
				}
					else if (i==7) {
						$("#cel8").css("background","black")
						sumador=0;
						casillas2[i]=1;
					}
						else if (i==8) {
							$("#cel9").css("background","black")
							sumador=0;
							casillas2[i]=1;
						}
						else if (i==11) {
					$("#cel12").css("background","black")
				sumador=0;
				casillas2[i]=1;
				}
					else if (i==12) {
						$("#cel13").css("background","black")
				sumador=0;
				casillas2[i]=1;
					}
						else if (i==13) {
							$("#cel14").css("background","black")
				sumador=0;
				casillas2[i]=1;
						}
						else if (i==16) {
					$("#cel17").css("background","black")
				sumador=0;
				casillas2[i]=1;
				}
					else if (i==17) {
						$("#cel18").css("background","black")
				sumador=0;
				casillas2[i]=1;
					}
						else if (i==18) {
							$("#cel19").css("background","black")
				sumador=0;
				casillas2[i]=1;
						}
			}
			else if (sumador==2) {
				sumador=0;
				casillas2[i]=casillas[i];
			};
		
		}
		//parte media derecha
		else if (i==9 || i==14 || i==19) {
			sumador=casillas[i-6]+casillas[i-5]+casillas[i-1]+casillas[i+4]+casillas[i+5];
			
			if (sumador<2 || sumador>3) {
				if (i==9) {
					$("#cel10").css("background","white")
							sumador=0;
							casillas2[i]=0;
				}
					else if(i==14){
						$("#cel15").css("background","white")
							sumador=0;
							casillas2[i]=0;
					}
						else if (i==19) {
							$("#cel20").css("background","white")
							sumador=0;
							casillas2[i]=0;
						}
			}
			else if (sumador==3) {
				if (i==9) {
					$("#cel10").css("background","black")
				sumador=0;
				casillas2[i]=1;
				}
					else if (i==14) {
						$("#cel15").css("background","black")
				sumador=0;
				casillas2[i]=1;
					}
						else if (i==19) {
							$("#cel20").css("background","black")
				sumador=0;
				casillas2[i]=1;
						}
			}
			else if (sumador==2) {
				sumador=0;
				casillas2[i]=casillas[i];
			};
		
		}
		else if (i==20) {
			sumador=casillas[15]+casillas[16]+casillas[21];
			
			if (sumador<2 || sumador>3) {
				$("#cel21").css("background","white")
				sumador=0;
				casillas2[i]=0;
			}
			else if (sumador==3) {
				$("#cel21").css("background","black")
				sumador=0;
				casillas2[i]=1;
			}
			else if (sumador==2) {
				sumador=0;
				casillas2[i]=casillas[i];
			};
		
		}
		//parte media inferior///////////////////////************
		else if (i==21 || i==22 || i==23) {
			sumador=casillas[i-6]+casillas[i-5]+casillas[i-4]+casillas[i-1]+casillas[i+1];
			
			if (sumador<2 || sumador>3) {
				if (i==21) {
					$("#cel22").css("background","white")
					sumador=0;
					casillas2[i]=0;
				}
					else if (i==22) {
						$("#cel23").css("background","white")
						sumador=0;
						casillas2[i]=0;
					}
					else if (i==23) {
						$("#cel24").css("background","white")
						sumador=0;
						casillas2[i]=0;
					}
			}
			else if (sumador==3) {
				if (i==21) {
					$("#cel22").css("background","black")
					sumador=0;
					casillas2[i]=1;
				}
					else if (i==22) {
						$("#cel23").css("background","black")
						sumador=0;
						casillas2[i]=1;
					}
						else if (i==23) {
							$("#cel24").css("background","black")
							sumador=0;
							casillas2[i]=1;
						}
			}
			else if (sumador==2) {
				sumador=0;
				casillas2[i]=casillas[i];
			};
		
		}
		////Esquinna
		else if (i==24) {
			sumador=casillas[18]+casillas[19]+casillas[23];
			
			if (sumador<2 || sumador>3) {
				$("#cel25").css("background","white")
				sumador=0;
				casillas2[i]=0;
			}
			else if (sumador==3) {
				$("#cel25").css("background","black")
				sumador=0;
				casillas2[i]=1;
			}
		
		};
	};//lla ve de cierre de for	
	bandera=1;
	tiempo=setTimeout(todo,500);
}

//boton iniciCIAR........................................................................................
$("#bot1").click(function(){
		//todo();
		tiempo = setTimeout(todo,500);
	})

//**********************boton Clear+*********************
	$("#bot3").click(function(){
		for (var i = 0; i < casillas.length; i++) {
				casillas[i]=0;
				$(celdas[i]).css("background","white");
			};	
			bandera=0;
			clearTimeout(tiempo);
	});
	
})
