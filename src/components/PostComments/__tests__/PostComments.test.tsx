import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar dois comentários", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("textarea-comment"), {
      target: {
        value: "Comentário adicionado via testes",
      },
    });
    fireEvent.click(screen.getByTestId("btn-adicionar-comentario"));

    fireEvent.change(screen.getByTestId("textarea-comment"), {
      target: {
        value: "Segundo comentário adicionado via testes",
      },
    });
    fireEvent.click(screen.getByTestId("btn-adicionar-comentario"));

    expect(screen.getAllByTestId("comentarios")).toHaveLength(2);
  });
});