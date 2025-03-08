# 📚 Design Estratégico do Projeto

## 📌 Aula 2: Mapeamento de Contextos (Context Mapping)

### **2️⃣ Atividade Prática: Context Mapping no Projeto**

📌 **Objetivo:**  
Identifique os **Bounded Contexts** do projeto e criar um **Context Map**, definindo as relações entre eles.

📌 **Instruções:**  
1️⃣ **Escolha um projeto** (real ou fictício). Ou utilize o seu projeto da aula 1. Pode ser um e-commerce, um sistema de saúde, um banco digital.    
2️⃣ **Liste os Bounded Contexts** que fazem parte do sistema.  
3️⃣ **Defina os relacionamentos** entre os contextos usando os padrões do Context Mapping (**Customer-Supplier, Shared Kernel, Anticorruption Layer, etc.**).  
4️⃣ **Crie um diagrama** representando o Context Map.  
5️⃣ **Justifique suas escolhas** (por que cada relacionamento foi modelado dessa forma?).

### 📌 Pede ai:

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

