<?php

namespace App\Entity;

use App\Repository\TeaTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TeaTypeRepository::class)
 */
class TeaType
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Tea::class, mappedBy="type")
     */
    private $teas;


    public function __construct()
    {
        $this->teas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Tea[]
     */
    public function getTeas(): Collection
    {
        return $this->teas;
    }

    public function addTea(Tea $tea): self
    {
        if (!$this->teas->contains($tea)) {
            $this->teas[] = $tea;
            $tea->setType($this);
        }

        return $this;
    }

    public function removeTea(Tea $tea): self
    {
        if ($this->teas->removeElement($tea)) {
            // set the owning side to null (unless already changed)
            if ($tea->getType() === $this) {
                $tea->setType(null);
            }
        }

        return $this;
    }
}
