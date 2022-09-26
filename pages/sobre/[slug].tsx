import { useRouter } from 'next/router';

function Rota() {

  const router = useRouter();


  const { slug } = router.query;

  return (
    <div>
      Use Hook pagina de {slug}
    </div>
  );
}



export default Rota;