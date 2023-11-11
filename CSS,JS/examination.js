    //    // ページのDOMツリーを読み込む
    //    $(document).ready(function () {

    //     // タイトル画面のみ表示させるため、要素を非表示にする
    //     $("#content__wrapper,footer").hide();
    //     });
    //     // メインコンテンツを表示させる
    //     $("#content__wrapper,footer").show();

    //     // アプリのスタート画面を非表示にする
    //     $("#app__title__screen").hide();
    //     // stepを非表示にする
    //     $(".step01,.step02,.step03,.step04,.your__solution").hide();
  
  

    
    
    
    
    // 国語非表示
    $("#content__wrapper_step1,footer").hide();
    // 数学非表示
    $("#content__wrapper_step2,footer").hide();
    // 英語非表示
    $("#content__wrapper_step3,footer").hide();
    // 理科非表示
    $("#content__wrapper_step4,footer").hide();
    // 社会非表示
    $("#content__wrapper_step5,footer").hide();
    // 結果非表示
    $("#saiten_box").hide();

    //国語点数定義 
    let jScore = 0;
    


    // 国語表示
    $('#yourname__registration__button').click(function (e) {
        e.preventDefault(); // フォームのデフォルト動作を無効化
        // .step01を表示させる
        $("#content__wrapper_step1").show();
    });
    // 国語１．採点
    const correctAnswer1 = 'D';
  $('.j_choice1').on('click', function() {{
    this.style.backgroundColor = "#3fb811";
  }
    const userAnswer = $(this).text().charAt(0);
    const resultElement = $('#answer_j1');
    if (userAnswer === correctAnswer1) {
      jScore++;
    }
  });
//   国語２採点
  const correctAnswer2 = 'D';
$('.j_choice2').on('click', function() {{
  this.style.backgroundColor = "#3fb811";
}
  const userAnswer = $(this).text().charAt(0);
  const resultElement = $('#answer_j2');
  if (userAnswer === correctAnswer2) {
    jScore++;
  } 
});
// 国語３採点
const correctAnswer3 = 'C';
$('.j_choice3').on('click', function() {{
  this.style.backgroundColor = "#3fb811";
}
  const userAnswer = $(this).text().charAt(0);
  const resultElement = $('#answer_j3');
  if (userAnswer === correctAnswer3) {
    jScore++;
  }
});
// 国語４採点
const correctAnswer4 = 'A';
$('.j_choice4').on('click', function() {{
  this.style.backgroundColor = "#3fb811";
}
  const userAnswer = $(this).text().charAt(0);
  const resultElement = $('#answer_j4');
  if (userAnswer === correctAnswer4) {
    jScore++;
  }
});
// 国語５採点
const correctAnswer5 = 'B';
$('.j_choice5').on('click', function() {{
  this.style.backgroundColor = "#3fb811";
}
  const userAnswer = $(this).text().charAt(0);
  const resultElement = $('#answer_j5');
  if (userAnswer === correctAnswer5) {
    jScore++;
  }
});



   //数学点数定義 
   let mScore = 0;


    // 数学表示
    $('.btn_m').click(function (e) {
        e.preventDefault(); // フォームのデフォルト動作を無効化
        // .step02を表示させる
        $("#content__wrapper_step2").show();
    });

        // 数学１．採点
        const correctAnswer21 = 'B';
        $('.m_choice1').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_m1');
          if (userAnswer === correctAnswer21) {
            mScore++;
          }
        });
      //   数学２採点
        const correctAnswer22 = 'A';
      $('.m_choice2').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_m2');
        if (userAnswer === correctAnswer22) {
          mScore++;
        } 
      });
      // 数学３採点
      const correctAnswer23 = 'D';
      $('.m_choice3').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_m3');
        if (userAnswer === correctAnswer23) {
          mScore++;
        }
      });
      // 数学４採点
      const correctAnswer24 = 'A';
      $('.m_choice4').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_m4');
        if (userAnswer === correctAnswer24) {
          mScore++;
        }
      });
      // 数学５採点
      const correctAnswer25 = 'B';
      $('.m_choice5').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_m5');
        if (userAnswer === correctAnswer25) {
          mScore++;
        }
      });
    
      

    //英語点数定義 
      let eScore = 0;
    
    // 英語表示
     $('.btn_e').click(function (e) {
         e.preventDefault(); // フォームのデフォルト動作を無効化
         // .step03を表示させる
         $("#content__wrapper_step3").show();
        });

        // 英語１．採点
        const correctAnswer31 = 'D';
        $('.e_choice1').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_e1');
          if (userAnswer === correctAnswer31) {
            eScore++;
            console.log("OK")
          }
        });
      //   英語２採点
        const correctAnswer32 = 'A';
      $('.e_choice2').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_e2');
        if (userAnswer === correctAnswer32) {
          eScore++;
          console.log("OK")
        } 
      });
      // 英語３採点
      const correctAnswer33 = 'C';
      $('.e_choice3').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_e3');
        if (userAnswer === correctAnswer33) {
          eScore++;
          console.log("OK")
        }
      });
      // 英語４採点
      const correctAnswer34 = 'A';
      $('.e_choice4').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_e4');
        if (userAnswer === correctAnswer34) {
        eScore++;
        console.log("OK")
        }
      });
      // 英語５採点
      const correctAnswer35 = 'B';
      $('.e_choice5').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_e5');
        if (userAnswer === correctAnswer35) {
        eScore++;
        console.log("OK")
        }
      });
    

    //理科点数定義 
      let rScore = 0;


     // 理科表示
     $('.btn_r').click(function (e) {
         e.preventDefault(); // フォームのデフォルト動作を無効化
         // .step04を表示させる
         $("#content__wrapper_step4").show();
        });
        
        // 理科１．採点
          const correctAnswer41 = 'D';
          $('.r_choice1').on('click', function() {{
            this.style.backgroundColor = "#3fb811";
          }
            const userAnswer = $(this).text().charAt(0);
            const resultElement = $('#answer_r1');
            if (userAnswer === correctAnswer41) {
              rScore++;
            }
          });
        //   理科２採点
          const correctAnswer42 = 'B';
        $('.r_choice2').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_r2');
          if (userAnswer === correctAnswer42) {
            rScore++;
          } 
        })
        // 理科３採点
        const correctAnswer43 = 'C';
        $('.r_choice3').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_r3');
          if (userAnswer === correctAnswer43) {
            rScore++;
          }
        });
        // 理科４採点
        const correctAnswer44 = 'C';
        $('.r_choice4').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_r4');
          if (userAnswer === correctAnswer44) {
            rScore++;
          }
        });
        // 理科５採点
        const correctAnswer45 = 'D';
        $('.r_choice5').on('click', function() {{
          this.style.backgroundColor = "#3fb811";
        }
          const userAnswer = $(this).text().charAt(0);
          const resultElement = $('#answer_r5');
          if (userAnswer === correctAnswer45) {
            rScore++;
          }
        });


      //社会点数定義 
      let sScore = 0;

     // 社会表示
     $('.btn_s').click(function (e) {
        e.preventDefault(); // フォームのデフォルト動作を無効化
        // .step05を表示させる
        $("#content__wrapper_step5").show();
       });

      // 社会１．採点
      const correctAnswer51 = 'D';
      $('.s_choice1').on('click', function() {{
        this.style.backgroundColor = "#3fb811";
      }
        const userAnswer = $(this).text().charAt(0);
        const resultElement = $('#answer_s1');
        if (userAnswer === correctAnswer51) {
          sScore++;
          console.log("OK")
        }
      });
    //   社会２採点
      const correctAnswer52 = 'B';
    $('.s_choice2').on('click', function() {{
      this.style.backgroundColor = "#3fb811";
    }
      const userAnswer = $(this).text().charAt(0);
      const resultElement = $('#answer_s2');
      if (userAnswer === correctAnswer52) {
        sScore++;
        console.log("OK")
      }
    })
    // 社会３採点
    const correctAnswer53 = 'C';
    $('.s_choice3').on('click', function() {{
      this.style.backgroundColor = "#3fb811";
    }
      const userAnswer = $(this).text().charAt(0);
      const resultElement = $('#answer_s3');
      if (userAnswer === correctAnswer53) {
        sScore++;
        console.log("OK")
      }
    });
    // 社会４採点
    const correctAnswer54 = 'C'
    $('.s_choice4').on('click', function() {{
      this.style.backgroundColor = "#3fb811";
    }
      const userAnswer = $(this).text().charAt(0);
      const resultElement = $('#answer_s4');
      if (userAnswer === correctAnswer54) {
        sScore++;
        console.log("OK")
      }
    });
    // 社会５採点
    const correctAnswer55 = 'B';
    $('.s_choice5').on('click', function() {{
      this.style.backgroundColor = "#3fb811";
    }
      const userAnswer = $(this).text().charAt(0);
      const resultElement = $('#answer_s5');
      if (userAnswer === correctAnswer55) {
        sScore++;
        console.log("OK")
      }
    });


          // 名前の反映
          // $("#form__yourname").change(function(){
          //   yourName = $("#yourname").val();
          // });
          // $("#your_name").html(yourName);

          
    //    結果発表
    // ボタンクリック時
    $(".btn_result").click(function(e){
        e.preventDefault(); // フォームのデフォルト動作を無効化
        $("#saiten_box").show();
        

        // 国語点数表示
        if(jScore=== 5) {
            $("#j_result").text(jScore + "点")
          } else if(jScore === 4) {
            $("#j_result").text(jScore + "点")
          } else if(jScore === 3) {
            $("#j_result").text(jScore + "点")
          } else if(jScore ===2){
            $("#j_result").text(jScore + "点")
          } else if(jScore ===1){
            $("#j_result").text(jScore + "点")
          } else if(jScore===0){
            $("#j_result").text(jScore + "点")
          } 
        // 数学点数表示
        if(mScore=== 5) {
            $("#m_result").text(mScore + "点")
          } else if(mScore === 4) {
            $("#m_result").text(mScore + "点")
          } else if(mScore === 3) {
            $("#m_result").text(mScore + "点")
          } else if(mScore ===2){
            $("#m_result").text(mScore + "点")
          } else if(mScore ===1){
            $("#m_result").text(mScore + "点")
          } else if(mScore===0){
            $("#m_result").text(mScore + "点")
          } 
         //英語点数表示 
          if(eScore=== 5) {
            $("#e_result").text(eScore + "点")
          } else if(eScore === 4) {
            $("#e_result").text(eScore + "点")
          } else if(eScore === 3) {
            $("#e_result").text(eScore + "点")
          } else if(eScore ===2){
            $("#e_result").text(eScore + "点")
          } else if(eScore ===1){
            $("#e_result").text(eScore + "点")
          } else if(eScore===0){
            $("#e_result").text(eScore + "点")
          } 
          // 理科点数表示
          if(rScore=== 5) {
            $("#r_result").text(rScore + "点")
          } else if(rScore === 4) {
            $("#r_result").text(rScore + "点")
          } else if(rScore === 3) {
            $("#r_result").text(rScore + "点")
          } else if(rScore ===2){
            $("#r_result").text(rScore + "点")
          } else if(rScore ===1){
            $("#r_result").text(rScore + "点")
          } else if(rScore===0){
            $("#r_result").text(rScore + "点")
          } 
          // 社会点数表示
          if(sScore=== 5) {
            $("#s_result").text(sScore + "点")
          } else if(sScore === 4) {
            $("#s_result").text(sScore + "点")
          } else if(sScore === 3) {
            $("#s_result").text(sScore + "点")
          } else if(sScore ===2){
            $("#s_result").text(sScore + "点")
          } else if(sScore ===1){
            $("#s_result").text(sScore + "点")
          } else if(sScore===0){
            $("#s_result").text(sScore + "点")
          } 
          

          console.log(jScore)
          console.log(mScore)
          console.log(eScore)
          console.log(rScore)
          console.log(sScore)


          // 合計点数
        let totalScore = jScore + mScore + eScore + rScore + sScore;
       $("#result").text(totalScore + "点/25点中")
      });

     array = [jScore, mScore, eScore, rScore, sScore]
   
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'radar',
         data: {
          labels: ["国語", "数学", "英語", "理科", "社会"],
          datasets: [{
            label: "試験成績",
            data: [jScore, mScore, eScore, rScore, sScore],
            backgroundColor: "rgba(67, 133, 215, 0.5)",  //グラフ背景色
            borderColor: "rgba(67, 133, 215, 1)"        //グラフボーダー色
          }]
        },
        options: {
          scales: {
            r: {
              max: 5,        //グラフの最大値
              min: 0,        //グラフの最小値
              ticks: {
                stepSize: 1  //目盛間隔
              }
            }
          },
        }
      });




// 結果発表
// 制限時間経過時
let btn =document.getElementById('yourname__registration__button');
btn.addEventListener('click', function(){
  window.setTimeout(function(){
    alert('時間切れです');
    $("#saiten_box").show();
            // 国語点数表示
        if(jScore=== 5) {
            $("#j_result").text(jScore + "点")
          } else if(jScore === 4) {
            $("#j_result").text(jScore + "点")
          } else if(jScore === 3) {
            $("#j_result").text(jScore + "点")
          } else if(jScore ===2){
            $("#j_result").text(jScore + "点")
          } else if(jScore ===1){
            $("#j_result").text(jScore + "点")
          } else if(jScore===0){
            $("#j_result").text(jScore + "点")
          } 
        // 数学点数表示
        if(mScore=== 5) {
            $("#m_result").text(mScore + "点")
          } else if(mScore === 4) {
            $("#m_result").text(mScore + "点")
          } else if(mScore === 3) {
            $("#m_result").text(mScore + "点")
          } else if(mScore ===2){
            $("#m_result").text(mScore + "点")
          } else if(mScore ===1){
            $("#m_result").text(mScore + "点")
          } else if(mScore===0){
            $("#m_result").text(mScore + "点")
          } 
         //英語点数表示 
          if(eScore=== 5) {
            $("#e_result").text(eScore + "点")
          } else if(eScore === 4) {
            $("#e_result").text(eScore + "点")
          } else if(eScore === 3) {
            $("#e_result").text(eScore + "点")
          } else if(eScore ===2){
            $("#e_result").text(eScore + "点")
          } else if(eScore ===1){
            $("#e_result").text(eScore + "点")
          } else if(eScore===0){
            $("#e_result").text(eScore + "点")
          } 
          // 理科点数表示
          if(rScore=== 5) {
            $("#r_result").text(rScore + "点")
          } else if(rScore === 4) {
            $("#r_result").text(rScore + "点")
          } else if(rScore === 3) {
            $("#r_result").text(rScore + "点")
            console.log(sScore)
          } else if(rScore ===2){
            $("#r_result").text(rScore + "点")
          } else if(rScore ===1){
            $("#r_result").text(rScore + "点")
          } else if(rScore===0){
            $("#r_result").text(rScore + "点")
          } 
          // 社会点数表示
          if(sScore=== 5) {
            $("#s_result").text(sScore + "点")
          } else if(sScore === 4) {
            $("#s_result").text(sScore + "点")
          } else if(sScore === 3) {
            $("#s_result").text(sScore + "点")
          } else if(sScore ===2){
            $("#s_result").text(sScore + "点")
          } else if(sScore ===1){
            $("#s_result").text(sScore + "点")
          } else if(sScore===0){
            $("#s_result").text(sScore + "点")
          } 

          // 合計点数
        let total = 0;
        let totalScore = jScore + mScore + eScore + rScore + sScore;
       $("#result").text(totalScore + "点")
  }, 60000);
});
  

