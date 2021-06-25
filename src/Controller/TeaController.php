<?php

namespace App\Controller;

use App\Entity\Tea;
use App\Repository\TeaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

class TeaController extends AbstractController
{
    private $encoders;
    private $normalizers;
    private $serializer;

    public function __construct()
    {
        $this->encoders = [new JsonEncoder()];
        $this->normalizers = [new ObjectNormalizer()];
        $this->serializer = new Serializer($this->normalizers, $this->encoders);
    }

    /**
     * @Route("/api/teas", name="teas")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getTeaList(TeaRepository $teaRepo): Response
    {
        $teaList = $teaRepo->findAll();

        $jsonTeaList = $this->serializer->serialize($teaList, 'json', [
            'circular_reference_handler' => function ($type) {
                return $type->getId();
            }
        ]);

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($jsonTeaList);

        return $response;
    }
}
