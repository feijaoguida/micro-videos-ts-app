import { Category } from './category';

describe("Category Unit Tests", () => { 
  test("should be able to create a new category", () => { 
    // Padrões de testes, baseiam em uma Triple A (Arrange, Act, Assert)

    // Arrange - Preparação - Prepara os dados para teste.
    const created_at = new Date();
    const props = {
      name: "Movie",
      description: "Teste de categoria",
      is_active: true,
      created_at,
    }

    // Act - Ação - Execução do teste.
    const category = new Category(props);

    // Assert - Verificação - Verifica se o teste foi realizado com sucesso.
    expect(category.name).toBe("Movie");
    expect(category.description).toBe("Teste de categoria");
    expect(category.is_active).toBeTruthy;
    expect(category.created_at).toBeInstanceOf(Date);
    expect(category.created_at).toBe(props.created_at);

    // Dessa forma, o teste é executado com sucesso, porem não tem 100% de cobertura.
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "Teste de categoria",
      is_active: true,
      created_at,
    })

  });
});