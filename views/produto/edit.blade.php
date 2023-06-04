@extends('layouts.app')

@section('style')
<link href="{{ asset('assets/plugins/vectormap/jquery-jvectormap-2.0.2.css') }}" rel="stylesheet"/>
@endsection

@section('wrapper')

<div class="card-body p-2">
		<div class="card-title d-flex align-items-center">
			<div><i class=" me-1 font-22 text-white"></i>
			</div>
			<h5 class="mb-0 text-white">Atualiazar Produtos dos Fornecedores</h5>
		</div>

		<hr>
		<form method="post" action="{{ route('produto.update', $produto->prod_id) }}" class="row g-3">
		@csrf
		@method('put')
        
        <div class="card-body p-2">
		<div class="card-title d-flex align-items-center">
			<div><i class=" font-14 text-white"></i>
			</div>
			<h5 class="mb-0 text-white">informações do Produto</h5>
		</div>
				
           	</div>           
				 <div class="col-6">
				 <label for="inputAddress" class="form-label"></label>
				 				
								<input type="text" class="form-control" name="prod_name" placeholder="Produto" value="{{ $produto->prod_name }}"></input>
									</div>
									
                                    <div class="col-6">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="prod_category" placeholder="Categoria" value="{{ $produto->prod_category }}"></input>
									</div>
                                    <div class="col-6">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="prod_unit" placeholder="Unidade" value="{{ $produto->prod_unit }}"></input>
									</div>
                                    <div class="col-6">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="prod_ncm" placeholder="NCM" value="{{ $produto->prod_ncm }}"></input>
									</div>
									<div class="col-12">
										<label for="inputAddress" class="form-label"></label>
										<textarea type="text" class="form-control" name="prod_note" placeholder="Notes" value="{{ $produto->prod_note }}"></textarea>
									</div>							

									<div class="col-6">
										<button type="submit" class="btn btn-success">Atualizar Produto</button>
									</div>
								
		</form>
			</div>				
                               
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