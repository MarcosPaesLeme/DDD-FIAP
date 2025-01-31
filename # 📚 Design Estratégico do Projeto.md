# 📚 Design Estratégico do Projeto

## 📌 Aula 1: Introdução ao Domain-Driven Design (DDD)

### **1️⃣ Revisão da Aula**

- O que é **Domain-Driven Design (DDD)**?
- Diferença entre **Complexidade Essencial vs. Complexidade Acidental**.
- **Subdomínios**: Core Domain, Supporting Subdomains e Generic Subdomains.
- **Bounded Contexts**: Separando conceitos e linguagens dentro do domínio.

### **2️⃣ Identificação dos Subdomínios**

| **Subdomínio**           | **Descrição**                                                                    | **Tipo**    |
| ------------------------ | -------------------------------------------------------------------------------- | ----------- |
| Gestão de Consultas      | Gerencia o agendamento, consulta por vídeo e emissão de atestados e receitas.    | Core Domain |
| Cadastro de Pacientes    | Gerencia o cadastro e informações pessoais e médicas dos pacientes.              | Supporting  |
| Gerenciamento de Médicos | Cadastro e validação de médicos, incluindo suas licenças e horários disponíveis. | Supporting  |
| Pagamentos               | Processa pagamentos e gerencia os repasses para médicos e clínicas.              | Generic     |
| Comunicação por Vídeo    | Realiza chamadas de vídeo durante as consultas.                                  | Generic     |
| Autenticação de Usuários | Gerencia login, permissões e segurança de acesso.                                | Generic     |

---

## 📌 Aula 2: Mapeamento de Contextos (Context Mapping)

### **1️⃣ Objetivo da Aula**

Nesta aula, vamos:
✅ Explorar como **Bounded Contexts** se relacionam entre si.  
✅ Aplicar **Context Mapping** para visualizar dependências entre contextos.  
✅ Criar um **diagrama de Context Mapping** para um projeto.

---

### **2️⃣ Atividade Prática: Context Mapping no Projeto**

📌 **Objetivo:**  
Identifique os **Bounded Contexts** do projeto e criar um **Context Map**, definindo as relações entre eles.

📌 **Instruções:**  
1️⃣ **Escolha um projeto** (real ou fictício). Ou utilize o seu projeto da aula 1. Pode ser um e-commerce, um sistema de saúde, um banco digital.
2️⃣ **Liste os Bounded Contexts** que fazem parte do sistema.  
3️⃣ **Defina os relacionamentos** entre os contextos usando os padrões do Context Mapping (**Customer-Supplier, Shared Kernel, Anticorruption Layer, etc.**).  
4️⃣ **Crie um diagrama** representando o Context Map.  
5️⃣ **Justifique suas escolhas** (por que cada relacionamento foi modelado dessa forma?).

📌 **Pede ai:**

| **Origem**                     | **Destino**                    | **Tipo de Relacionamento** | **Explicação**                                                                                                                                                                             |
| ------------------------------ | ------------------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Contexto Gestão de Pedidos     | Contexto de Catálogo de Pratos | Customer/Supplier          | O **Contexto de Pedidos** depende do **Catálogo de Pratos** para obter informações sobre o cardápio e fazer os pedidos.                                                                    |
| Contexto Gestão de Pedidos     | Contexto de Pagamentos         | Customer/Supplier          | O **Contexto de Pedidos** envia os dados do pedido para o **Contexto de Pagamentos** processar o pagamento.                                                                                |
| Contexto de Catálogo de Pratos | Contexto de Gestão de Estoque  | Customer/Supplier          | O **Catálogo de Pratos** consulta o **Gestão de Estoque** para verificar a disponibilidade de ingredientes para pratos.                                                                    |
| Contexto de Gestão de Estoque  | Contexto de Gestão de Pedidos  | Customer/Supplier          | O **Contexto de Estoque** envia informações sobre a quantidade de ingredientes disponíveis para o **Contexto de Pedidos** para realizar a compra dos ingredientes.                         |
| Contexto de Pagamentos         | Contexto de Gestão de Pedidos  | Customer/Supplier          | O **Contexto de Pagamentos** notifica o **Contexto de Pedidos** sobre o status do pagamento (confirmado/falhou).                                                                           |
| Contexto de Pagamentos         | Contexto de Gestão de Usuários | Customer/Supplier          | O **Contexto de Pagamentos** consulta os dados do cliente no **Contexto de Gestão de Usuários** para validar o pagamento.                                                                  |
| Contexto de Autenticação       | Contexto de Gestão de Usuários | Conformist                 | O **Contexto de Autenticação** adota as regras do **Contexto de Gestão de Usuários** para garantir a consistência no gerenciamento de usuários e permissões.                               |
| Contexto de Gestão de Usuários | Contexto de Catálogo de Pratos | Customer/Supplier          | O **Contexto de Gestão de Usuários** envia dados de preferências ou histórico de clientes para o **Catálogo de Pratos**, personalizando a experiência.                                     |
| Contexto de Gestão de Pedidos  | Contexto de Autenticação       | Anti-Corruption Layer      | O **Contexto de Pedidos** valida os dados do usuário no **Contexto de Autenticação**, mas de forma desacoplada, para não depender diretamente da implementação do sistema de autenticação. |
| Contexto de Gestão de Pedidos  | Contexto de Pagamentos         | Customer/Supplier          | O **Contexto de Pedidos** emite o evento "Pedido Finalizado" que dispara o processamento do pagamento no **Contexto de Pagamentos**.                                                       |

📌 **Formato de Entrega:**

- O trabalho pode ser entregue em **Markdown (.md), PDF ou apresentação (PPT)**.
- O diagrama pode ser anexado como **imagem** ou **link para uma ferramenta online**.
- Entrega via **repositório Git** ou outra plataforma definida pelo professor.

📌 **Ferramentas para Criar o Diagrama:**

- [Miro](https://miro.com/)
- [Lucidchart](https://www.lucidchart.com/)
- [Figma](https://www.figma.com/)

## 📌 Aula 3: Próximos Passos

Na próxima aula, vamos explorar **Design Tático**, abordando:  
🔹 **Entidades vs. Value Objects** – Como diferenciar e modelar corretamente.  
🔹 **Agregados** – Como definir o agregado raiz e garantir consistência.  
🔹 **Repositórios** – Como separar persistência da lógica de domínio.

📌 **Prepare-se!** Tente aplicar **Context Mapping** no seu projeto antes da próxima aula.

---

**📢 Bom trabalho! Nos vemos na próxima aula! 🚀**
