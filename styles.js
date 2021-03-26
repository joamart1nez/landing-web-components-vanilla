export function normalizeCss(){
  return `<style>*{margin:0;padding:0; box-sizing: border-box}</style>`
}

export function HeaderCss(){
  return `
<style>
  header{
    height: 90px;
    padding: 0 40px;
    display: flex; flex-direction: row; justify-content: space-between; align-items: center;
    font-size: 18px;
  }
  .header_nav{
    width: 45%; height: 40px;
    display: flex; flex-direction: row; justify-content: space-between; align-items: center;
  }
  .nav_item{
    color: #203A43;
    font-weight: bold;
    cursor: pointer;
    padding: 10px 20px;
    transition: .2s ease-in-out;
  }
  .nav_item:hover{
    color: #2C5364;
    background: #4158D011;
  }
  .item-menu{
    position:relative;
  }
  .item-menu .row{
    transform: rotate(0deg);
    transition: .2s ease-in-out;
  }
  .item-menu .sub-menu{
    transform: scale(0);
    transform-origin: left top; transition: .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    background: white;
    box-shadow: 6px 6px 15px #4158D011;
    padding: 10px;
    position:absolute; left:0; top: 41px;
    list-style: none;
  }
  .sub-menu li{
    padding: 8px;
    transition: .2s ease-in-out;
  }
  .sub-menu li:hover{
    background: #4158D044;
  }
  .header_action{
    height: 40px;
    display: flex; flex-direction: row; justify-content: space-between; align-items: center;
  }
  .header_action_search{
    height: 100%;
    display: flex; align-items: center;
  }
  .header_action_search_input{
    transform: scale(0);
    transform-origin: right; transition: .3s ease-in-out;
    width: 220px; height: 80%;
    padding: 3px 8px; border: 1px solid gray;
    font-weight: bold; color: gray; 
    border-radius: 20px; outline: none;
  }
  .search_input_invisible{transform: scale(1);}
  svg{
    cursor: pointer;
    position:right;
  }
  button{
    font-size: 18px; border: none; background: white;
    padding: 10px 20px; outline: none; cursor: pointer;
    border-radius: 20px; transition: .2s ease-in-out;
    color: #2C5364;
  }
  button:hover{
    box-shadow: 3px 5px 15px #4158D055;
  }
  button:active{
    box-shadow: none;
  }
  .button-nav-sign{
    color: white; background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    border-radius: 20px;
  }
</style>`
}

export function WelcomeCss(){
  return`
  <style>
    .welcome{
      width: 100%; height: 530px;
      display: flex; justify-content:center; align-items: center;
      background-clip: border-box;
      background-size: cover
    }
    .welcome_card{
      width: 880px;
      padding: 70px 50px;
      background: #2460AF66;
      display: flex; flex-direction: column; justify-content:center; align-items: center;
      color: white;
      letter-spacing: .08em;
      text-shadow: 2px 3px 5px #555;
    }
    h1{
      font-size: 40px;
      margin-bottom: 25px;
      font-family: none;
    }
    p{
      font-size: 22px;
      margin-bottom: 40px;
      text-align: center
    }

    button{
      font-size: 18px; border: none; background: white;
      padding: 10px 20px; outline: none; cursor: pointer;
      border-radius: 20px; transition: .2s ease-in-out;
      color: white; background-color: #FBAB7E;
      background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
      border-radius: 20px;
    }
    button:hover{
      box-shadow: 3px 5px 15px gray;
    }
    button:active{
      box-shadow: none;
    }
  </style>
  `
}

export function CardCss(){
  return`
    <style>
      .card{
        width: 500px; margin: 0 25px;
        padding: 10px 0;
        display: flex; flex-direction: column; justify-content: center; align-items: center;
        text-align: center; transition: .3s ease-in-out;
        border-radius: 8px;
      }
      .card:hover{
        box-shadow: 0px 0px 10px rgba(0,0,0,.2);
      }
      .cardTitle{
        font-size: 28px;
        font-family: none;
      }
      .cardContent{
          font-size: 22px;
          margin: 20px;
      }
      button{
        font-size: 18px; border: 1px solid #2C5364; background: white;
        padding: 10px 20px; outline: none; cursor: pointer;
        border-radius: 20px; transition: .2s ease-in-out;
        color: #2C5364; transition: .3s ease-in-out;
        margin-bottom: 20px;
      }
      button:hover{
        background: #4158D011;
      }
      img{
        width:100%; height: 400px;
      }
    </style>
  `
}