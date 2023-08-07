MIGRANDO SISTEMA PHP PARA O LARAVEL 8 

1) Iniciar o projeto 
       
       - composer create-project --prefer-dist Laravel/Laravel ERP
     
2) Instalar NPM para as dependências Front End do Scaffold
       
       - npm install
       - npm run dev
       
3) Criar o banco de dados
       
       - create database Fornecedores;
 
4) Importar o banco de dados 
       
       - importar o banco de dados do sistema antigo em php

5) Conxexão com banco de dados
       
       -DB_CONNECTION=mysql
       -DB_HOST=127.0.0.1
       -DB_PORT=3306
       -DB_DATABASE=Fornecedores
       -DB_USERNAME=root
       -DB_PASSWORD=7070


6) endpoints do caminho das rotas e seus respectivos metodos        
              
        - php artisan make:controller --resource FornecedorController --model=Fornecedor
        - Chamando a rota pelo nome ->name('').

        - Route::resource('/fornecedores', FornecedorController::class);

        - Route::get('/fornecedores', 'App\Http\Controllers\FornecedorController@index')->name('fornecedor');
        - Route::get('/fornecedores/create', 'App\Http\Controllers\FornecedorController@create')->name('fornecedorCreate');
        - Route::post('/fornecedores/store', 'App\Http\Controllers\FornecedorController@store')->name('fornecedorStore');
        - Route::get('/fornecedores/edit', 'App\Http\Controllers\FornecedorController@edit')->name('fornecedorEdit');
        - Route::put('/fornecedores/update', 'App\Http\Controllers\FornecedorController@update')->name('fornecedorUpdate');
        - Route::delete('/fornecedores/destroy', 'App\Http\Controllers\FornecedorController@destroy')->name('fornecedorDestroy');

        II)Habilitar o controller das rotas Route>Web.php

            use App\http\Controllers\ProdutoVendaController;

7) Retornar o caminho e metodo index de fornecedores

          public function index(){  

          return view('fornecedor.index');  

          }

         incluir

8) Criar Repositorio e suas respectivas views fornecedor>index.blade.php

        - usar o template admin bootstrap 5 responsive
        - copiar tabela do template admin bootstrap 5 e personalizar
        - {{passando o caminho.metodo do controller}}
        - Declarando o Method=""         
        - action definindo o caminho onde a requisição será disparada 

          <form method="post" action="{ route('fornecedores.create') }" class="row g-3">

    II)Criar tabela fornecedores e seu cabeçario <head>d

        - <table>
        - dentro da table criar o cabecario da tabela 
        - cabeçario da tabela <tr>
        - cedula de registros da tabela <td>
        - dentro do <td> os nomes do cabeçario da tabela

        <table id=""">
	
        <thead>
			<tr>
                <th> ID </th>
                <th> pessoa </th>
                <th> cidade< /th>    
                <th> Acao </th>
            </tr>
		</thead>           

    II) criar o corpo da tabela de fornecedores         
        
        - corpo do tabela <tbody>	
        - cabeçario da tabela <tr>
        - cedula de registros da tabela <td>
        - dentro do <td>açao</td> criar <span> e os link de direcionamento href="" >
        - <td><span> <a href="">Editar</a> 
        - <span> <a href="">Deletar</a></td>  
        

        <tbody>	
                <tr role="row" class="odd">

                 
                    <td class="sorting_1">FOR - </td>
                    <td></td>                 
                    <td></td>
                    <td>
                       <span>
                            <a href="" class="btn btn-warning">Editar</a>
                            @csrf
                            @method('post')
                        </span>

                        <span>
                            <a href="" class="btn btn-danger">Excluir</a>
                        </span>
                    </td>
                </tr>           
        </tbody>

9) Preparar o corpo do formulario da table p/ os Request  
              	
        - incluir @foreach p/ pecorrer todo registro dentro do corpo da tabela <tbody> pegando as colunas do banco
        - passar $variavel recebendo request as $class do model com os atributos ($fornecedores as $fornecedor)
        - incluir nos registro <td> $class pegando os atributo_banco {{ $variavel->atributo_banco }}
        - $fornecedor {{$fornecedor->name}} alimentada com atribudos do banco q vai passar p/ a $fornecedores armazenar.


        <tbody>	
            @foreach ($fornecedores as $fornecedor)
            <tr>                                    
                <td >FOR - {{ $fornecedor->sup_id }}</td>                    
                <td>{{ $fornecedor->name }}</td>
                <td>{{ $fornecedor->postal_code }}</td>                
                <td>{{ $fornecedor->city }}</td>
                <td>
                    <span>
                        <a href="{{ route('fornecedores.edit', $fornecedor->sup_id]) }}" class="btn btn-warning">Editar</a>
                        @csrf
                        @method('post')
                    </span  
                    <span>
                        <a href="" class="btn btn-danger">Excluir</a>
                    </span>
                </td>
            </tr>
            @endforeach
        </tbody>



10) Listando os Dados com metodo Index do controller

         - Criando variavel $fornecedores recebendo os atributos da class Fornecedor
         - returnando a view do caminho da rota e seu metodo ('fornecedor.index',
         - método compact ('fornecedores')) pegando os atributidos da $variavel recebendo os atributos da class

            public function index(){
            
            //variavel recebendo todos os atributos da class vindo da view fornecedor
            $fornecedores = Fornecedor::all();

            return view('fornecedor.index', compact('fornecedores'));
            }

11) Definindo o caminho da rota e seu metodo no botao adicionar da view index.blade

        <a href="{{ route('fornecedores.create') }}" class="btn btn-success float-right">Adicionar</a>


12) Criar cadastro de novos fornecedores 

        public function create(){  return view('fornecedor.create');  }


13) Criar Repositorio e suas respectivas views fornecedor>create.blade.php

        - usar o template admin bootstrap 5 responsive
        - copiar tabela do template admin bootstrap 5 e personalizar      

14) Criar formulario  para cadastrar novos fornecedores da view create.blade

        - preparar o cabecario do formulario <head>

        - Declarando o Method=""         
        - action=" definindo o caminho e seu metodo de requisição q será disparada 
        - {{passando a rota ( o caminho.metodo do controller) }}"

        - dentro do formulario criar uma div label representando o titulo do cabeçario
        - personalizar o corpo formulario  
        - <label nome do campo dos registros do formulario
        - criar input e definir seu type="" e name"" 
      
        
            <form method="post" action="{{ route('fornecedores.store') }}" class="row g-3">
            @csrf
            @method('post')      


            <div class="col-md-7">
                <label>Produtos dos fornecedores</label>			
            </div>

                <div class="col-md-6">
                    <label>CEP:</label>
                    <input type="text" name="postal_code">
                </div>

15) Preparar o corpo do formulario da table p/ os Request  

        - criar mais os campos do formulario de cadastro
        - label definindo o nome do campo
        - alimentando os iput, definindo o type="" e name=""

            <div>
				<label >CEP:</label>
				<input type="text" name="postal_code">
			</div>
			<div >
				<label>Endereço:</label>
				<input type="text" name="address">
			</div>

        - criar o button do typy="submit" pra enviar os dados do formulario

             <div class="col-12">
				<button type="submit" class="btn btn-light px-5">Register</button>
			 </div>
			</form>


16) Metodo resposavel por Retorna a View para criar um item da tabela

        - $array = recebendo todos os atributos da class Fornecedor::all();
        - returnando a view do caminho da rota e seu metodo ('fornecedor.create',
        - método compact ('fornecedor')) pegando os atributidos da $variavel recebendo os atributos da class

        public function create(){

            //$array recebendo todos os atributos da class Estado
            $fornecedor = Fornecedor::all();

            return view('fornecedor.create', compact('fornecedor'));
        }


17) Disparando os dados do formulario para o metodo Store receber request e armazenar os dados no banco

        public function store(Request $request) {    }
        

18) criar Moldel Banco e Estado complementando os campos de form da tabela sp_supplier       

        php artisan make:model Banco
        php artisan make:model Estado

        // php artisan make:model -mcr Fornecedor

19) atribuir o método save na instância do modelo para inserir os dados no banco

            use App\Models\Fornecedor;
            use App\Models\Banco;
            use App\Models\Estado;

    
20) definindo quais atributos do modelo vão ser atribuidos em massa.

            protected $table = 'sp_supplier';
        
            public $timestamps = false;

            protected $fillable = [
                'sup_id',
                'sup_type',
                'person',
                'name',
                'rg',
                'cpf',
                'cnjp',          
            ];

21) SE necessario Criando as tabelas no banco de dados e a Migration

        php artisan make:migration create_fornecedores_table

            Schema::create('fornecedores', function (Blueprint $table) {
                $table->id('sup_id');
                $table->integer('sup_type');
                $table->string('person', 200);         
                $table->decimal('rg' 17);       });    

        php artisan migrate       


22) Store p/ obtenção request ::create salvando novos registros (passando parametro das respectivas Class::)

            
        - Disparando dados do form p/ metodo Store receber request e armazenar os dados no banco
        - Extender as class::salvando request do form's metodo post atribuidos do name="" view Create             
        - Criar $variavel p/ = receber class com os atribuidos name="" metodos create p/ salvar
        - Metodo ->all() selecionando ('todos') os name="" q vao ser salvos 
        - Metodo ->Only selecionando ('apenas') os name="" q vao ser salvos // ao contrario do ->all();

       
            public function store(Request $request)    {
            
            Fornecedor::create($request->all());

            return redirect()->route('fornecedores.index');

        
        - no caso se for usar o metodo ->only
        
            $fornecedor = Fornecedor::create($request->only(['postal_code', 'number','city','cellphone', 'emails']));
              

23) Definindo o caminho da rota e seu metodo no botao editar da view index.blade

        - Token @csrf 
        - verbo http da tota @method('')

        <a href="{{ route('fornecedores.editar') }}" class="btn btn-success float-right">Editar</a>
        @csrf
        @method('post')


24) Metodo Edit responsalvel por Retorna a View de edição de dados

        - Criar view index.blade
        - Copiar view create.blade e colar na view index.blade
        - definir method="" da action
        - definir o caminho da rota e seu metodo  action="{{ route('fornecedores.update',
        - passar o request com os names inputs alimentados  $fornecedor->sup_id) }}" 
        - token @csrf para validar o envio dos dados
        - @method('') do verbo http da rota

            <form method="post" action="{{ route('fornecedores.update', $fornecedor->sup_id) }}" class="row g-3">
            @csrf
            @method('PUT')


        - alimentar os input que já tem o type="" e name="" armazenado os dados
        - alimentar os  value="{{$fornecedor->complement}}" do input q vao exibir os dados armazenado dos name=""
        
            <div class="col-md-6">
                <label >CEP:</label>
                <input type="text"  name="postal_code" value="{{$fornecedor->postal_code}}">
            </div>



25) Passado os parametros (Request $request) na function do Metodo Edit

        - Criando variavel $fornecedores recebendo os atributos da class Fornecedor
        - returnando a view do caminho da rota e seu metodo ('fornecedor.edit',
        - método compact ('fornecedores')) pegando os atributidos da $variavel recebendo os atributos da class


            public function edit(Providers $providers){

            return view('fornecedor.edit', compact('fornecedores'));

            }                       

26) Definindo primary key sup_id referente ao model da tabela suppiller onde vai ser atribudos os valoes 

        protected $primaryKey = 'sup_id';

27) metodo UPDATE responsavel pelo processo de atualizacao das informacoes do metodo edit

        - $variavel-> ativado pelo metodo udpate, passando o $request e todos seus atribudos alimentados

        public function update(Request $request, Produto $produto){
            $produto->update($request->all());

            return redirect()->route('produto.index');
        }


28) Deletando os dados 

        public function destroy(Providers $providers)
        {
            $providers->delete();

            return redirect()->route('fornecedores.index');
        }


28) Mostra um item específco com  Methodo show recebendo objeto instaciado 

    public function update(Request $request, Providers $providers)
    {
        $providers->update($request->all());

        return redirect()->route('fornecedores.index');    }



















<br><br><br><br><br><br><br><br><br>

    -----EXTENDENDO O TEMPLATE ADM BOOTSTRAP 5 PARA CADA VIEW --------------------------------------------------------------------------------------------------


    extendendo layout.app

            - incluir o layout hearder e nav  @incluede("layouts.hearder") @include("layouts.nav")
            - @yield("style")
            - @yield("wrapper") 
            - @yield("script") 

            <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <!--favicon-->
            <link rel="icon" href="{{ asset('assets/images/favicon-32x32.png') }}" type="image/png" />
            <!--plugins-->
            @yield("style")
            <link href="{{ asset('assets/plugins/simplebar/css/simplebar.css') }}" rel="stylesheet" />
            <link href="{{ asset('assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css') }}" rel="stylesheet" />
            <link href="{{ asset('assets/plugins/metismenu/css/metisMenu.min.css') }}" rel="stylesheet" />
            <!-- loader-->
            <link href="{{ asset('assets/css/pace.min.css') }}" rel="stylesheet" />
            <script src="{{ asset('assets/js/pace.min.js') }}"></script>
            <!-- Bootstrap CSS -->
            <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
            <link href="{{ asset('assets/css/app.css') }}" rel="stylesheet">
            <link href="{{ asset('assets/css/icons.css') }}" rel="stylesheet">

            <title>Siliplastic</title>
            </head>

            <body class="bg-theme bg-theme1">
            <!--wrapper-->
            <div class="wrapper">

            @include("layouts.header")

            @include("layouts.nav")


            <div class="page-wrapper">
                <div class="page-content">
                    
                    @yield("wrapper")

                </div>
            </div>
        

            <!--start overlay-->
            <div class="overlay toggle-icon"></div>
            <!--end overlay-->
            <!--Start Back To Top Button--> <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
            <!--End Back To Top Button-->
            <footer class="page-footer">
                <p class="mb-0">Copyright © {{ date('Y') }}. Todos os direitos reservados.</p>
            </footer>
            </div>
            <!--end wrapper-->
            <!-- Bootstrap JS -->
            <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
            <!--plugins-->
            <script src="{{ asset('assets/js/jquery.min.js') }}"></script>
            <script src="{{ asset('assets/plugins/simplebar/js/simplebar.min.js') }}"></script>
            <script src="{{ asset('assets/plugins/metismenu/js/metisMenu.min.js') }}"></script>
            <script src="{{ asset('assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js') }}"></script>
            <!--app JS-->
            <script src="{{ asset('assets/js/app.js') }}"></script>
            @yield("script")
    </body>



    passar a extensão dos layouts nas views        index.blade.php

        @extends('layouts.app')

            @section('style')
            <link href="{{ asset('assets/plugins/vectormap/jquery-jvectormap-2.0.2.css') }}" rel="stylesheet"/>
            @endsection

            @section('wrapper')

            ////cola aqui a informacao que fica na pagina index.

            
            @endsection
                
            @section('script')
            <script src="{{ asset('assets/plugins/chartjs/js/Chart.min.js') }}"></script>
            <script src="{{ asset('assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js') }}"></script>
            <script src="{{ asset('assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js') }}"></script>
            <script src="{{ asset('assets/plugins/jquery.easy-pie-chart/jquery.easypiechart.min.js') }}"></script>
            <script src="{{ asset('assets/plugins/sparkline-charts/jquery.sparkline.min.js') }}"></script>
            <script src="{{ asset('assets/plugins/jquery-knob/excanvas.js') }}"></script>
            <script src="{{ asset('assets/plugins/jquery-knob/jquery.knob.js') }}"></script>
            <script>
                $(function() {
                    $(".knob").knob();
                });
            </script>
            <script src="{{ asset('assets/js/index.js') }}"></script>
            @endsection


	<!--		@foreach( $estados as $estado ) <option value="{{ $estado->st_name }}">{{ $estado->st_name }}</option>@endforeach	 -->
        - passando parametro da primary key da tabela no banco ->parameters(['Fornecedor' => 'id']) ; 

        - Route::resource('Fornecedor', 'App\http\Controllers\FornecedorController')->parameters(['Fornecedor' => 'id']) ; 

 

------------------------------------ GIT HUB ----------------------------------------------------------------------


        - git status                         ->  ver alterações no projeto
        - git add .                          ->  adicionar as alterações no projeto
        - git commit -m "descriçãodocommit"  -> descrever o commit
        - git push -f                        ->  pra forçar o envio do arquivo pro git
# ERP
