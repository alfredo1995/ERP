@extends('layouts.app')

@section('style')
<link href="{{ asset('assets/plugins/vectormap/jquery-jvectormap-2.0.2.css') }}" rel="stylesheet"/>
<link href="{{ asset('assets/plugins/datatable/css/dataTables.bootstrap5.min.css') }}" rel="stylesheet" />
@endsection

@section('wrapper')

<div class="card-body">

	<div id="example_wrapper" class="dataTables_wrapper dt-bootstrap5">
        <div class="row">
   
            <div class="col-sm-12 col-md-6"></div>
                <div id="example_filter" class="dataTables_filter"> 
                    <a href="{{ route('fornecedor.create') }}" class="btn btn-success float-right">Adicionar</a>
                    </div>
                </div>
            </div>
                <div class="row"><div class="col-sm-12">
        <div class="table-responsive">
        <table id="example" class="table table-striped table-bordered " style="width: 100%;">
	
        <thead>
			<tr role="row">
                <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" >ID</th>
                <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" >Pessoa</th>
                <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending">Nome</th>
                <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending">CEP</th>
                <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" >Endereço</th>
                <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" >Numero</th>
                <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending">Bairro</th>
                <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending">Cidade</th>    
                <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending">Acao</th>
            </tr>
		</thead>

		<tbody>	
                 <!--    -->
    		@foreach ($fornecedores as $fornecedor)
                <tr role="row" class="odd">

                 
                    <td class="sorting_1">FOR - {{ $fornecedor->sup_id }}</td>
                    <td>{{ $fornecedor->person }}</td>
                    <td>{{ $fornecedor->name }}</td>
                    <td>{{ $fornecedor->postal_code }}</td>
                    <td>{{ $fornecedor->address }}</td>
                    <td>{{ $fornecedor->number }}</td>
                    <td>{{ $fornecedor->neighbourhood }}</td>
                    <td>{{ $fornecedor->city }}</td>
                    <td>
                        <form action="" method="post">
                        @csrf
                        @method('delete')
                        
                            <a href="{{ route('fornecedor.edit', $fornecedor->sup_id) }}" class="btn btn-warning">Editar</a>

                            <button type="submit" class="btn btn-danger">Excluir</button>
                        </form>    
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
  
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
<script src="{{ asset('assets/plugins/datatable/js/jquery.dataTables.min.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/js/dataTables.bootstrap5.min.js')}}"></script>
<script>
		$(document).ready(function() {
			$('#example').DataTable();
		  } );
	</script>
	<script>
		$(document).ready(function() {
			var table = $('#example2').DataTable( {
				lengthChange: false,
				buttons: [ 'copy', 'excel', 'pdf', 'print']
			} );
		 
			table.buttons().container()
				.appendTo( '#example2_wrapper .col-md-6:eq(0)' );
		} );
	</script>
  <script>
      $(function() {
          $(".knob").knob();
      });
  </script>
  <script src="{{ asset('assets/js/index.js') }}"></script>
@endsection