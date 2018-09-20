<?php
require_once("./mail/class.phpmailer.php");

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

if($obj){

    $mail = new PHPMailer(true);

    // Define os dados do servidor e tipo de conexão
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $mail->IsSMTP(); // Define que a mensagem será SMTP

    try {
       $mail->Host       = 'mail.ydeal.net.br'; // Endereço do servidor SMTP (Autenticação, utilize o host smtp.seudomínio.com.br)
       $mail->SMTPAuth   = true;  // Usar autenticação SMTP (obrigatório para smtp.seudomínio.com.br)
       $mail->Port       = 587; //  Usar 587 porta SMTP
       $mail->SMTPSecure = "tls";
       $mail->Username   = 'contato@clubedemaodeobra.com.br'; // Usuário do servidor SMTP (endereço de email)
       $mail->Password   = 'tf599313'; // Senha do servidor SMTP (senha do email usado)

       //Define o remetente
       // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
       $mail->SetFrom('contato@clubedemaodeobra.com.br', 'Nome'); //Seu e-mail
       //$mail->AddReplyTo('email', 'Nome'); //Seu e-mail
       $mail->Subject = 'Contato pelo site';//Assunto do e-mail


       //Define os destinatário(s)
       //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
       $mail->AddAddress('yuri@alldoctors.com.br', 'Teste');

       //Campos abaixo são opcionais
       //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
       //$mail->AddCC('destinarario@dominio.com.br', 'Destinatario'); // Copia
       //$mail->AddBCC('destinatario_oculto@dominio.com.br', 'Destinatario2`'); // Cópia Oculta
       //$mail->AddAttachment('images/phpmailer.gif');      // Adicionar um anexo


       $html = '<b>Nome: </b>'.$obj['nome'].'</br>
       <b>E-mail: </b>'.$obj['email'].'</br>
       <b>Telefone: </b>'.$obj['telefone'].'</br>
       <b>Mensagem: </b>'.$obj['mensagem'].'</br></br>';

       //Define o corpo do email
       $mail->MsgHTML(utf8_decode($html));

       ////Caso queira colocar o conteudo de um arquivo utilize o método abaixo ao invés da mensagem no corpo do e-mail.
       //$mail->MsgHTML(file_get_contents('arquivo.html'));

       $mail->Send();

       echo json_encode(array('return' => true, 'mensagem' => 'Contato enviado com sucesso, aguarde nossa equipe retornar'));

      //caso apresente algum erro é apresentado abaixo com essa exceção.
    }catch (phpmailerException $e) {
      echo json_encode(array('return' => false, 'mensagem' => $e->errorMessage().' Contate o administrador do sistema'));
    }
}

//echo json_encode(array('nome' => $obj['nome'], 'email' => $obj['email'], 'telefone' => $obj['telefone'], 'mensagem' => $obj['mensagem']));
?>
