------------ ------------------------------------------------------------
  date         Sat, 08 Apr 2023 18:29:35 +0000
  controller   "RecipeController"
  source       RecipeController.php on line 27
  file         app\Http\Controllers\Api\Admin\Recipe\RecipeController.php
 ------------ ------------------------------------------------------------

Illuminate\Http\Request^ {#43
  +attributes: Symfony\Component\HttpFoundation\ParameterBag^ {#45
    #parameters: []
  }
  +request: Symfony\Component\HttpFoundation\ParameterBag^ {#35
    #parameters: array:7 [
      "file" => []
      "name" => "Teszt receptecske"
      "description" => "Ez lesz a recept leírása"
      "recipeLevel" => "1"
      "preparationTime" => 18
      "cookingTime" => 27
      "steps" => array:1 [
        0 => array:2 [
          "title" => "Step 1"
          "description" => "Lopj egy tyúkot :)"
        ]
      ]
    ]
  }
  +query: Symfony\Component\HttpFoundation\InputBag^ {#51
    #parameters: []
  }
  +server: Symfony\Component\HttpFoundation\ServerBag^ {#47
    #parameters: array:30 [
      "DOCUMENT_ROOT" => "D:\webdev\2023.02.16-nuxt-Laravel10\backend-23_03_21\public"
      "REMOTE_ADDR" => "127.0.0.1"
      "REMOTE_PORT" => "51002"
      "SERVER_SOFTWARE" => "PHP 8.1.11 Development Server"
      "SERVER_PROTOCOL" => "HTTP/1.1"
      "SERVER_NAME" => "127.0.0.1"
      "SERVER_PORT" => "8000"
      "REQUEST_URI" => "/api/recipe"
      "REQUEST_METHOD" => "POST"
      "SCRIPT_NAME" => "/index.php"
      "SCRIPT_FILENAME" => "D:\webdev\2023.02.16-nuxt-Laravel10\backend-23_03_21\public\index.php"
      "PATH_INFO" => "/api/recipe"
      "PHP_SELF" => "/index.php/api/recipe"
      "HTTP_HOST" => "127.0.0.1:8000"
      "HTTP_USER_AGENT" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0"
      "HTTP_ACCEPT" => "application/json"
      "HTTP_ACCEPT_LANGUAGE" => "hu-HU,hu;q=0.8,en-US;q=0.5,en;q=0.3"
      "HTTP_ACCEPT_ENCODING" => "gzip, deflate, br"
      "HTTP_REFERER" => "http://localhost:3000/"
      "CONTENT_TYPE" => "application/json"
      "HTTP_CONTENT_TYPE" => "application/json"
      "CONTENT_LENGTH" => "202"
      "HTTP_CONTENT_LENGTH" => "202"
      "HTTP_ORIGIN" => "http://localhost:3000"
      "HTTP_CONNECTION" => "keep-alive"
      "HTTP_SEC_FETCH_DEST" => "empty"
      "HTTP_SEC_FETCH_MODE" => "cors"
      "HTTP_SEC_FETCH_SITE" => "cross-site"
      "REQUEST_TIME_FLOAT" => 1680978575.4431
      "REQUEST_TIME" => 1680978575
    ]
  }
  +files: Symfony\Component\HttpFoundation\FileBag^ {#48
    #parameters: []
  }
  +cookies: Symfony\Component\HttpFoundation\InputBag^ {#46
    #parameters: []
  }
  +headers: Symfony\Component\HttpFoundation\HeaderBag^ {#49
    #headers: array:13 [
      "host" => array:1 [
        0 => "127.0.0.1:8000"
      ]
      "user-agent" => array:1 [
        0 => "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0"
      ]
      "accept" => array:1 [
        0 => "application/json"
      ]
      "accept-language" => array:1 [
        0 => "hu-HU,hu;q=0.8,en-US;q=0.5,en;q=0.3"
      ]
      "accept-encoding" => array:1 [
        0 => "gzip, deflate, br"
      ]
      "referer" => array:1 [
        0 => "http://localhost:3000/"
      ]
      "content-type" => array:1 [
        0 => "application/json"
      ]
      "content-length" => array:1 [
        0 => "202"
      ]
      "origin" => array:1 [
        0 => "http://localhost:3000"
      ]
      "connection" => array:1 [
        0 => "keep-alive"
      ]
      "sec-fetch-dest" => array:1 [
        0 => "empty"
      ]
      "sec-fetch-mode" => array:1 [
        0 => "cors"
      ]
      "sec-fetch-site" => array:1 [
        0 => "cross-site"
      ]
    ]
    #cacheControl: []
  }
  #content: "{"file":{},"name":"Teszt receptecske","description":"Ez lesz a recept leírása","recipeLevel":"1","preparationTime":18,"cookingTime":27,"steps":[{"title":"Step 1","description":"Lopj egy tyúkot :)"}]}"
  #languages: null
  #charsets: null
  #encodings: null
  #acceptableContentTypes: null
  #pathInfo: "/api/recipe"
  #requestUri: "/api/recipe"
  #baseUrl: ""
  #basePath: null
  #method: "POST"
  #format: null
  #session: null
  #locale: null
  #defaultLocale: "en"
  -preferredFormat: null
  -isHostValid: true
  -isForwardedValid: true
  #json: Symfony\Component\HttpFoundation\ParameterBag^ {#35}
  #convertedFiles: null
  #userResolver: Closure($guard = null)^ {#247
    class: "Illuminate\Auth\AuthServiceProvider"
    this: Illuminate\Auth\AuthServiceProvider {#150 …}
    use: {
      $app: Illuminate\Foundation\Application {#3 …}
    }
    file: "D:\webdev\2023.02.16-nuxt-Laravel10\backend-23_03_21\vendor\laravel\framework\src\Illuminate\Auth\AuthServiceProvider.php"
    line: "88 to 90"
  }
  #routeResolver: Closure()^ {#256
    class: "Illuminate\Routing\Router"
    this: Illuminate\Routing\Router {#26 …}
    use: {
      $route: Illuminate\Routing\Route {#233 …}
    }
    file: "D:\webdev\2023.02.16-nuxt-Laravel10\backend-23_03_21\vendor\laravel\framework\src\Illuminate\Routing\Router.php"
    line: "771 to 771"
  }
  basePath: ""
  format: "html"
}
