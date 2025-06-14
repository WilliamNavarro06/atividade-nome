class Nome {
    constructor(nomeCompleto) {
      this.nomeCompleto = nomeCompleto;
      this.juncoes = ["da", "de", "do", "dos", "das", "e"];
    }
  
    formatar() {
      const partes = this.nomeCompleto.trim().split(" ");
      let ultimoSobrenome = "";
  
      for (let i = partes.length - 1; i >= 0; i--) {
        if (!this.juncoes.includes(partes[i].toLowerCase())) {
          ultimoSobrenome = partes[i];
          partes.splice(i, 1);
          break;
        }
      }
  
      return `${ultimoSobrenome}, ${partes.join(" ")}`;
    }
  }
  
  function formatarNome() {
    const nomeInput = document.getElementById("nomeInput").value;
    const nome = new Nome(nomeInput);
    document.getElementById("resultado").textContent = nome.formatar();
  }

  
  // Me da uma MB pfv, usei até POO :)