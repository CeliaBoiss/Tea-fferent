<?php

namespace App\Repository;

use App\Entity\TeaType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TeaType|null find($id, $lockMode = null, $lockVersion = null)
 * @method TeaType|null findOneBy(array $criteria, array $orderBy = null)
 * @method TeaType[]    findAll()
 * @method TeaType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TeaTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TeaType::class);
    }
}
