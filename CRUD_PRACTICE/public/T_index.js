//메인페이지 사진 올리는 탬플릿 
module.exports = {





    html : function mainHTML(){ // 여기에 엘리먼트 추가 
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>Galleria</title>
            <script src="https://kit.fontawesome.com/13c41f2ad3.js" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
          <div class="header">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#"><i class="fa-solid fa-cloud"></i>Daon Gallery</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="login" >로그인</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <!-- 동기화 버튼 어떻게 쓸까 고민중  -->
                <a class="link" href="/write" >+동기화</a>
                <a class="link" href="/write" >+사진추가</a>
          </div>
          <main>
            
          </main>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" ></script>
        </body>
        </html>`
    }
};
//여기 패치예정 : createElement 함수를 만들어 카드 형식으로 패치예정 

