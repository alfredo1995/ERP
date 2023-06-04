<!--sidebar wrapper -->
<div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
        <div>
            <img src="https://siliplastic.com.br/erp/assets/images/logo.png" class="logo-icon" alt="logo icon">
        </div>
        <div>
            <h4 class="logo-text">Siliplastic</h4>
        </div>
        <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
        </div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
        <li
        >
            <a href="http://127.0.0.1:8000/">
                <div class="parent-icon"><i class='bx bx-home-circle'></i>
                </div>
                <div class="menu-title">Inicial</div>
            </a>
        </li>
        <li class="menu-label">Compras</li>
        <li
        >
            <a href=" {{ route('pedido.index') }} ">
                <div class="parent-icon"><i class='bx bx-file-find'></i>
                </div>
                <div class="menu-title">Pedidos</div>
            </a>
        </li>
        <li
        >
            <a href=" {{ route('produto.index') }} ">
                <div class="parent-icon"><i class='bx bx-box'></i>
                </div>
                <div class="menu-title">Produtos</div>
            </a>
        </li>
        <li
        >
            <a href=" {{ route('fornecedor.index') }} ">
                <div class="parent-icon"><i class='bx bx-cart-alt'></i>
                </div>
                <div class="menu-title">Fornecedores</div>
            </a>
        </li>
        <li
        >
            <a href="#">
                <div class="parent-icon"><i class='bx bx-bar-chart-alt-2'></i>
                </div>
                <div class="menu-title">Relatórios</div>
            </a>
        </li>

        <li class="menu-label">Vendas</li>
        <li
        >
            <a href="#">
                <div class="parent-icon"><i class='bx bx-flag'></i>
                </div>
                <div class="menu-title">Metas</div>
            </a>
        </li>
        <li
        >
            <a href=" {{ route('pedidoVenda.index') }} ">
                <div class="parent-icon"><i class='bx bx-file-find'></i>
                </div>
                <div class="menu-title">Pedidos</div>
            </a>
        </li>
        <li
        >
            <a href=" {{ route('produtoVenda.index') }} ">
                <div class="parent-icon"><i class='bx bx-box'></i>
                </div>
                <div class="menu-title">Produtos</div>
            </a>
        </li>
        <li
        >
            <a href="#">
                <div class="parent-icon"><i class='bx bx-user'></i>
                </div>
                <div class="menu-title">Clientes</div>
            </a>
        </li>
        <li
        >
            <a href="#">
                <div class="parent-icon"><i class='bx bx-bar-chart-alt-2'></i>
                </div>
                <div class="menu-title">Relatórios</div>
            </a>
        </li>
        <li
        >
            <a href="#">
                <div class="parent-icon"><i class='bx bx-car'></i>
                </div>
                <div class="menu-title">Transportadoras</div>
            </a>
        </li>

        <li class="menu-label">Financeiro</li>
        <li
        >
            <a href="#">
                <div class="parent-icon"><i class='bx bx-trending-up'></i>
                </div>
                <div class="menu-title">Contas a receber</div>
            </a>
        </li>
        <li
        >
            <a href="#">
                <div class="parent-icon"><i class='bx bx-trending-down'></i>
                </div>
                <div class="menu-title">Contas a pagar</div>
            </a>
        </li>

        <li class="menu-label">Configurações</li>
        <li
        >
            <a href="#">
                <div class="parent-icon"><i class='bx bx-user'></i>
                </div>
                <div class="menu-title">Usuários</div>
            </a>
        </li>
        <li
        >
            <a href="#">
                <div class="parent-icon"><i class='bx bx-group'></i>
                </div>
                <div class="menu-title">Grupos</div>
            </a>
        </li>
    </ul>
    <!--end navigation-->
</div>
<!--end sidebar wrapper -->
