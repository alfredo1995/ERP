@extends('layouts.app')

@section('style')
<link href="{{ asset('assets/plugins/vectormap/jquery-jvectormap-2.0.2.css') }}" rel="stylesheet"/>
@endsection

@section('wrapper')

<div class="card-body p-5">
		<div class="card-title d-flex align-items-center">
			<div><i class="bx bxs-user me-1 font-22 text-white"></i>
			</div>
			<h5 class="mb-0 text-white">Fornecedor</h5>
		</div>

		<hr>
		<form method="post" action="{{ route('fornecedor.store') }}" class="row g-3">
        @csrf
        @method('post')
        <div class="col-md-7">
			<label for="inputState" class="form-label">Produtos dos fornecedores</label>
			<select id="sup_type" name="sup_type" class="form-control" onchange="getSupplierType(this.value);" required="">
			    <option value="">Tipo de fornecedor</option>
			   	<option value="1">Pessoa Jurídica</option>
				<option value="2">Pessoa Física</option>
			   </select>
		</div>

            <div class="col-md-6">
				<label for="inputFirstName" class="form-label">CEP:</label>
				<input type="text" class="form-control" name="postal_code">
			</div>
			<div class="col-md-6">
				<label for="inputFirstName" class="form-label">Endereço:</label>
				<input type="text" class="form-control" name="address">
			</div>
			<div class="col-md-6">
				<label for="inputLastName" class="form-label">Numero:</label>
				<input type="text" class="form-control" name="number">
			</div>
			<div class="col-md-6">
				<label for="inputEmail" class="form-label">Complemento:</label>
				<input type="text" class="form-control" name="complement">
			</div>
			<div class="col-md-6">
				<label for="inputPassword" class="form-label">Bairro:</label>
				<input type="text" class="form-control" name="neighbourhood">
			</div>
			<div class="col-md-6">
				<label for="inputPassword" class="form-label">cidade:</label>
				<input type="text" class="form-control" name="city">
			</div>
			<div class="col-md-6">
			<label for="inputState" class="form-label">Estado</label>
			<select id="inputState" class="form-select" name="state">
			<option selected=""></option>
		
		@foreach( $estados as $estado ) 
		<option value="{{ $estado->st_name }}">{{ $estado->st_name }}
		</option>
		@endforeach	
	
			</select>
		</div>
			<div class="col-md-6">
				<label for="inputPassword" class="form-label">País:</label>
				<input type="text" class="form-control" name="country">
			</div>
			<div class="col-md-6">
				<label for="inputPassword" class="form-label">Telefone:</label>
				<input type="text" class="form-control" name="telephoe">
			</div>
            <div class="col-md-6">
				<label for="inputPassword" class="form-label">Celular:</label>
				<input type="text" class="form-control" name="cellphone">
			</div>
            <div class="col-md-16">
				<label for="inputPassword" class="form-label">E-mails:</label>
				<input type="email" class="form-control" name="emails">
			</div>
       

        <div class="card-body p-5">
		<div class="card-title d-flex align-items-center">
			<div><i class="bx bxs-user me-1 font-22 text-white"></i>
			</div>
			<h5 class="mb-0 text-white">Conta Bancárias</h5>
		</div>

		<hr>
		
        <a href="" class="btn btn-success float-right">Nova Conta Bancária</a>
           	</div>
            
								
                                <div class="col-3">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="s_b_id" placeholder="Favorecido" rows="1"></input>
									</div>
                                    <div class="col-2">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="b_cpf" placeholder="CPF ou CNPJ" rows="1"></input>
									</div>
                                    <div class="col-3">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="bbank" placeholder="Banco" rows="1"></input>
									</div>
                                    <div class="col-3">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="agency" placeholder="Agência" rows="1"></input>
									</div>
                                    <div class="col-1">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="digit" placeholder="Dígito" rows="1"></input>
									</div>
                                    <div class="col-2">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="amount" placeholder="Conta" rows="1"></input>
									</div>
                                    <div class="col-1">
										<label for="inputAddress" class="form-label"></label>
										<input type="text" class="form-control" name="digit_amount" placeholder="Dígito" rows="1"></input>
									</div>
                                                    
                                    <div class="col-md-4">
										<label for="inputState" class="form-label"></label>
										<select id="inputState" class="form-select">
											<option selected="" name="type">POUPANÇA</option>
											<option name="type_acc">CORRENTE</option>
										</select>
									</div>
                                    <div class="col-2">
										<label for="inputAddress" class="form-label"></label>
										<textarea type="text" class="form-control" id="inputAddress" placeholder="Nota" rows="1"></textarea>
									</div>
									<div class="col-12">
										<label for="inputAddress" class="form-label"></label>
										<textarea type="text" class="form-control" id="inputAddress" placeholder="Notes" rows="3"></textarea>
									</div>
									<div class="col-12">
										<button type="submit" class="btn btn-light px-5">Register</button>
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