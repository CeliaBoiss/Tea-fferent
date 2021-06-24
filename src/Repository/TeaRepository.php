<?php

namespace App\Repository;

use App\Entity\Tea;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Tea|null find($id, $lockMode = null, $lockVersion = null)
 * @method Tea|null findOneBy(array $criteria, array $orderBy = null)
 * @method Tea[]    findAll()
 * @method Tea[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TeaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Tea::class);
    }
}
