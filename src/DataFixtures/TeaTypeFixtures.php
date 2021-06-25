<?php


namespace App\DataFixtures;

use App\Entity\TeaType;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class TeaTypeFixtures extends Fixture
{
    public const TYPES = ['Green Tea', 'Black Tea', 'White Tea'];

    public function load(ObjectManager $manager)
    {
        foreach (self::TYPES as $key => $typeName) {
            $teaType = new TeaType();
            $teaType->setName($typeName);    
            $manager->persist($teaType);
            $this->addReference('type_' . $key, $teaType);
        }

        $manager->flush();
    }
}
