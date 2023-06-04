@extends('layouts.app')

@section('style')
<link href="{{ asset('assets/plugins/vectormap/jquery-jvectormap-2.0.2.css') }}" rel="stylesheet"/>
@endsection

@section('wrapper')

<div class="card-body p-2">
		<div class="card-title d-flex align-items-center">
			<div><i class="bx bxs-user me-1 font-22 text-white"></i>
			</div>
			<h5 class="mb-0 text-white">Adicionar Pedidos</h5>
		</div>

		<hr>	
		<form method="post" action="{{ route('pedido.store') }}" class="row g-3">
        @csrf
        @method('post')
        
      
        
        <div class="card-body p-2">
		<div class="card-title d-flex align-items-center">
			<div><i class=" me-1 font-22 text-white"></i>
			</div>
			<h5 class="mb-0 text-white">informações dos pedidos</h5>
		</div>
		<hr>		
           	</div>           
				 <div class="col-6">
				 <label for="inputAddress" class="form-label"></label>
				 				
								<input type="text" class="form-control" name="prod_name" placeholder="Produto" rows="1"></input>
									</div>
									
                                    <div class="col-6">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="prod_category" placeholder="Categoria" rows="1"></input>
									
								
								
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