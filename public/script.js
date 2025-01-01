const categorias = {
  Refeição: {
    Carnes: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Carne Premium',
        preco: 79.99,
        precoPromocional: 69.99,
        peso: '500g',
        descricao: 'Carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Picanha Maturada',
        preco: 149.99,
        precoPromocional: 129.99,
        peso: '700g',
        descricao: 'Corte especial de picanha com sabor inigualável.',
      },
    ],
    Frango: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Frango Assado',
        preco: 39.99,
        precoPromocional: 34.99,
        peso: '1kg',
        descricao: 'Frango assado no ponto perfeito, tempero especial.',
      },
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Frango à Milanesa',
        preco: 44.99,
        precoPromocional: 39.99,
        peso: '800g',
        descricao: 'Filé de frango empanado, crocante e saboroso.',
      },
    ],
    Massas: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Lasanha de Carne',
        preco: 59.99,
        precoPromocional: 49.99,
        peso: '1kg',
        descricao: 'Lasanha tradicional com molho bolonhesa e queijo gratinado.',
      },
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Espaguete ao Alho e Óleo',
        preco: 29.99,
        precoPromocional: 24.99,
        peso: '500g',
        descricao: 'Espaguete simples e saboroso com alho dourado.',
      },
    ],
  },
  Sobremesas: {
    Bolos: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Bolo de Chocolate',
        preco: 39.99,
        precoPromocional: 34.99,
        peso: '500g',
        descricao: 'Sobremesa deliciosa com sabor intenso de chocolate.',
      },
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Bolo de Cenoura',
        preco: 35.99,
        precoPromocional: 29.99,
        peso: '450g',
        descricao: 'Clássico bolo de cenoura com cobertura de chocolate.',
      },
    ],
    Sorvetes: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Sorvete de Morango',
        preco: 19.99,
        precoPromocional: 17.99,
        peso: '500ml',
        descricao: 'Sorvete cremoso com sabor natural de morango.',
      },
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Sorvete de Chocolate',
        preco: 19.99,
        precoPromocional: 17.99,
        peso: '500ml',
        descricao: 'Sorvete rico e cremoso com sabor de chocolate.',
      },
    ],
    Tortas: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Torta de Limão',
        preco: 49.99,
        precoPromocional: 44.99,
        peso: '1kg',
        descricao: 'Torta leve e refrescante com recheio de limão.',
      },
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Torta Holandesa',
        preco: 54.99,
        precoPromocional: 49.99,
        peso: '1kg',
        descricao: 'Torta com creme especial e cobertura de chocolate.',
      },
    ],
  },
  Bebidas: {
    Refrigerantes: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Refrigerante Cola Cola',
        preco: 6.99,
        precoPromocional: 5.49,
        peso: '350ml',
        descricao: 'Refrigerante clássico, ideal para acompanhar refeições.',
      },
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Guaraná',
        preco: 6.99,
        precoPromocional: 6.49,
        peso: '500ml',
        descricao: 'guaraná puro e refrescante.',
      },
    ],
    Sucos: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Suco de Laranja',
        preco: 12.99,
        precoPromocional: 10.99,
        peso: '300ml',
        descricao: 'Suco natural de laranja, fresco e saudável.',
      },
    ],
  },
  Alcoólicas: {
    Cervejas: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Cerveja Lager',
        preco: 9.99,
        precoPromocional: 8.49,
        peso: '600ml',
        descricao: 'Cerveja refrescante, ideal para momentos de descontração.',
      },
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Cerveja IPA',
        preco: 14.99,
        precoPromocional: 12.99,
        peso: '500ml',
        descricao: 'Cerveja artesanal com sabor marcante e aroma intenso.',
      },
    ],
    Vinhos: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Vinho do Porto',
        preco: 129.99,
        precoPromocional: 99.99,
        peso: '750ml',
        descricao: 'Vinho doce e encorpado, ideal para sobremesas.',
      },
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Vinho Verde',
        preco: 89.99,
        precoPromocional: 74.99,
        peso: '750ml',
        descricao: 'Vinho leve e frutado, perfeito para dias quentes.',
      },
    ],
    Whisky: [
      {
        imagem: 'foto-do-produto.webp',
        nome: 'Jack Daniels',
        preco: 189.99,
        precoPromocional: 159.99,
        peso: '1L',
        descricao: 'Whisky americano com notas de caramelo e baunilha.',
      },
    ],
  },
};

document.addEventListener('DOMContentLoaded', () => {

  const produtosContainer = document.getElementById('produtos');

  // Função para exibir produtos
  const exibirProdutos = (produtos) => {
    produtosContainer.innerHTML = produtos.map(produto => `
      <div>
        <h2>${produto.nome}</h2>
        <p>Preço: R$${produto.preco.toFixed(2)}</p>
        <p>Descrição: ${produto.descricao || 'Sem descrição'}</p>
      </div>
    `).join('');
  };

  // WebSocket para atualizações em tempo real
  const socket = new WebSocket('ws://adddddprooooducts.onrender.com');

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.tipo === 'atualizacao') {
      exibirProdutos(data.produtos);
    }
  };

  // Busca inicial dos produtos
  fetch('/produtos')
    .then(res => res.json())
    .then(exibirProdutos)
    .catch(err => console.error('Erro ao buscar produtos:', err));

  const searchInput = document.getElementById('search-input');
  const clearSearchButton = document.getElementById('clear-search-button');
  
  // Adicionando evento para mudanças no campo de pesquisa
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    clearSearchButton.style.display = query ? 'block' : 'none'; // Mostrar ou esconder o botão de limpar

    // Redefinir a categoria e subcategoria para 0 quando o usuário começar a digitar
    resetCategoryAndSubcategory();

    // Filtrar produtos com base na pesquisa
    filterProducts(query);
  });

  // Adicionando evento para fechar o teclado ao pressionar "Enter"
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.target.blur(); // Remove o foco do campo, fechando o teclado no mobile
    }
  });

  // Limpar pesquisa ao clicar no botão de 'X'
  clearSearchButton.addEventListener('click', () => {
    searchInput.value = '';  // Limpar campo de entrada
    clearSearchButton.style.display = 'none';  // Esconder o botão de limpar
    resetCategoryAndSubcategory();  // Resetar categoria e subcategoria
    filterProducts('');  // Exibir todos os produtos
  });

  const categoryButtons = document.querySelectorAll('.category-button');
  
  // Adicionar a classe 'active' ao primeiro botão e exibir os produtos dessa categoria
  if (categoryButtons.length > 0) {
    categoryButtons[0].classList.add('active');
    const firstCategory = categoryButtons[0].classList[1]; // Usando a segunda classe, que é o nome da categoria
    toggleCategory(firstCategory);
  }

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active')); // Remover a classe active de todas as categorias
      button.classList.add('active'); // Adicionar a classe active na categoria clicada
      const category = button.classList[1]; // Usando a segunda classe que é o nome da categoria
      toggleCategory(category);
    });
  });
});


// Função para resetar categoria e subcategoria para a 0
function resetCategoryAndSubcategory() {
  const categoryButtons = document.querySelectorAll('.category-button');
  const subcategoryDropdown = document.querySelector('.subcategory-dropdown');
  const clearSelectionButton = document.querySelector('.clear-selection-button');

  // Remover a classe 'active' de todas as categorias
  categoryButtons.forEach(button => button.classList.remove('active'));

  // Resetando a classe ativa da categoria para o primeiro botão
  if (categoryButtons.length > 0) {
    categoryButtons[0].classList.add('active');
    const firstCategory = categoryButtons[0].classList[1]; // Nome da categoria 0
    toggleCategory(firstCategory);
  }

  // Resetando a subcategoria para a primeira opção
  if (subcategoryDropdown) {
    subcategoryDropdown.selectedIndex = 0;  // "Selecione uma categoria"
  }

  if (clearSelectionButton) {
    clearSelectionButton.style.display = 'none';  // Esconder o botão de limpar
  }
}

// Função para alternar categoria e exibir os produtos
function toggleCategory(category) {
  const mainContainer = document.querySelector('.sub-categorias');
  const subcategories = categorias[category]; // Usando categorias do seu objeto 'categorias'

  mainContainer.innerHTML = ''; // Limpar conteúdo anterior

  // Adicionar dropdown de subcategorias
  const subcategoryDropdownContainer = document.createElement('div');
  subcategoryDropdownContainer.classList.add('subcategory-dropdown-container');
  const subcategoryDropdown = document.createElement('select');
  subcategoryDropdown.classList.add('subcategory-dropdown');

  // Adicionar a opção "Selecione uma categoria"
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Selecione uma categoria';
  defaultOption.value = '';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  subcategoryDropdown.appendChild(defaultOption);

  // Adicionar as opções de subcategoria
  Object.keys(subcategories).forEach(subcategoria => {
    const option = document.createElement('option');
    option.value = subcategoria;
    option.textContent = subcategoria;
    subcategoryDropdown.appendChild(option);
  });

  // Adicionar o botão de limpar a seleção
  const clearSelectionButton = document.createElement('button');
  clearSelectionButton.textContent = '';
  clearSelectionButton.classList.add('clear-selection-button');
  clearSelectionButton.title = 'Desmarcar subcategoria';
  clearSelectionButton.style.display = 'none'; // Oculto inicialmente

  clearSelectionButton.addEventListener('click', () => {
    subcategoryDropdown.selectedIndex = 0; // Reset para "Selecione"
    displayRandomProducts(subcategories);
    clearSelectionButton.style.display = 'none'; // Ocultar o botão "X"
  });

  subcategoryDropdown.addEventListener('change', () => {
    const selectedSubcategory = subcategoryDropdown.value;
    if (selectedSubcategory) {
      displayProducts(subcategories[selectedSubcategory]);
      clearSelectionButton.style.display = 'inline'; // Mostrar botão "X"
    } else {
      displayRandomProducts(subcategories);
      clearSelectionButton.style.display = 'none'; // Ocultar botão "X"
    }
  });

  subcategoryDropdownContainer.appendChild(subcategoryDropdown);
  subcategoryDropdownContainer.appendChild(clearSelectionButton);
  mainContainer.appendChild(subcategoryDropdownContainer);

  // Exibir produtos aleatórios por padrão
  displayRandomProducts(subcategories);
}


// Função para exibir produtos de forma aleatória
function displayRandomProducts(subcategories) {
  const mainContainer = document.querySelector('.main-container');
  const existingProducts = mainContainer.querySelector('.products');
  if (existingProducts) existingProducts.remove();

  const productContainer = document.createElement('div');
  productContainer.classList.add('products');

  Object.entries(subcategories).forEach(([subcategoria, products]) => {
    const randomProducts = products.slice().sort(() => 0.5 - Math.random()).slice(0, 5);

    randomProducts.forEach((produto) => {
      const precoOriginal = produto.preco
        ? `<p><span class="preco-original">R$${produto.preco.toFixed(2)}</span></p>`
        : '';

      const productHTML = `
  <div class="product">
        <div class="product-img">
          <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
          <button class="blink-button" onclick="addToCart('${produto.nome}', ${produto.precoPromocional.toFixed(2)})">
            <img src="3669464_add_cart_shopping_ic_icon.svg" alt="adicionar no carrinho">
          </button>
        </div>
        <div class="info-product">
        <div>${produto.peso}</div>
          <h3>${produto.nome}</h3>
          <div class="prices">
            <p><span class="preco-promocional">R$${produto.precoPromocional.toFixed(2)}</span></p>
            ${precoOriginal}
          </div>
        </div>
                  <button class="toggle-description-button"><img src="info-icon.svg" alt="Informações da comida"></button>
        <p class="product-description">${produto.descricao}</p>
      </div>
      `;
      productContainer.innerHTML += productHTML;
    });
  });
  productContainer.querySelectorAll('.toggle-description-button').forEach((button) => {
    button.addEventListener('click', () => {
      const description = button.nextElementSibling;
      if (description.classList.contains('active')) {
        description.classList.remove('active');
      } else {
        description.classList.add('active');
      }        
    });
  });
  mainContainer.appendChild(productContainer);
}

// Função para exibir produtos da subcategoria selecionada
// Função para exibir produtos da subcategoria selecionada
function displayProducts(products) {
  const mainContainer = document.querySelector('.main-container');

  // Limpar produtos anteriores
  const existingProducts = mainContainer.querySelector('.products');
  if (existingProducts) existingProducts.remove();

  const productContainer = document.createElement('div');
  productContainer.classList.add('products');

  if (products && products.length > 0) {
    products.forEach((produto) => {
      const precoOriginal = produto.preco
        ? `<p><span class="preco-original">R$${produto.preco.toFixed(2)}</span></p>`
        : '';

      const productHTML = `
     <div class="product">
        <div class="product-img">
          <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
          <button class="blink-button" onclick="addToCart('${produto.nome}', ${produto.precoPromocional.toFixed(2)})">
            <img src="3669464_add_cart_shopping_ic_icon.svg" alt="adicionar no carrinho">
          </button>
        </div>
        <div class="info-product">
                <div>${produto.peso}</div>
          <h3>${produto.nome}</h3>
          <div class="prices">
            <p><span class="preco-promocional">R$${produto.precoPromocional.toFixed(2)}</span></p>
            ${precoOriginal}
          </div>
        </div>
                  <button class="toggle-description-button"><img src="info-icon.svg" alt="Informações da comida"></button>
        <p class="product-description">${produto.descricao}</p>
      </div>
      `;

      productContainer.innerHTML += productHTML;
    });

    // Adicionar evento aos botões "Ver Descrição"
    productContainer.querySelectorAll('.toggle-description-button').forEach((button) => {
      button.addEventListener('click', () => {
        const description = button.nextElementSibling;
        if (description.classList.contains('active')) {
          description.classList.remove('active');
        } else {
          description.classList.add('active');
        }        
      });
    });
  } else {
    productContainer.innerHTML = `<p class="no-products active">Nenhum produto disponível nessa subcategoria.</p>`;
  }

  mainContainer.appendChild(productContainer);
}


// Função para filtrar os produtos conforme o texto de pesquisa
function filterProducts(query) {
  const mainContainer = document.querySelector('.main-container');
  const existingProducts = mainContainer.querySelector('.products');
  if (existingProducts) existingProducts.remove();

  const filteredProducts = [];
  
  // Iterar pelas categorias e subcategorias para filtrar os produtos
  Object.entries(categorias).forEach(([category, subcategories]) => {
    Object.entries(subcategories).forEach(([subcategory, products]) => {
      const matchedProducts = products.filter((product) => 
        product.nome.toLowerCase().includes(query)
      );

      if (matchedProducts.length > 0) {
        filteredProducts.push(...matchedProducts);
      }
    });
  });

  if (filteredProducts.length > 0) {
    const productContainer = document.createElement('div');
    productContainer.classList.add('products');

    filteredProducts.forEach((produto) => {
      const precoOriginal = produto.preco
        ? `<p><span class="preco-original">R$${produto.preco.toFixed(2)}</span></p>`
        : '';

      const productHTML = `
      <div class="product"> 
        <div class="product-img">
          <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
          <button class="blink-button" onclick="addToCart('${produto.nome}', ${produto.precoPromocional.toFixed(2)})">
            <img src="3669464_add_cart_shopping_ic_icon.svg" alt="adicionar no carrinho">
          </button>
        </div>
        <div class="info-product">
                <div>${produto.peso}</div>
          <h3>${produto.nome}</h3>
          <div class="prices">
            <p><span class="preco-promocional">R$${produto.precoPromocional.toFixed(2)}</span></p>
            ${precoOriginal}
          </div>
        </div>
                  <button class="toggle-description-button"><img src="info-icon.svg" alt="Informações da comida"></button>
        <p class="product-description">${produto.descricao}</p>
      </div>
      `;
      productContainer.innerHTML += productHTML;
    });

    productContainer.querySelectorAll('.toggle-description-button').forEach((button) => {
      button.addEventListener('click', () => {
        const description = button.nextElementSibling;
        if (description.classList.contains('active')) {
          description.classList.remove('active');
        } else {
          description.classList.add('active');
        }        
      });
    });

    mainContainer.appendChild(productContainer);

    // Remover a classe active de no-products se algum produto for encontrado
    const noProductElement = mainContainer.querySelector('.no-products');
    if (noProductElement) {
      noProductElement.classList.remove('active');
    }
  } else {
    mainContainer.innerHTML = `<p class="no-products active">Nenhum produto encontrado.</p>`;
  }
}
