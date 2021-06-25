<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210625092525 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE tea_type (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE tea ADD type_id INT NOT NULL');
        $this->addSql('ALTER TABLE tea ADD CONSTRAINT FK_8E86D7B2C54C8C93 FOREIGN KEY (type_id) REFERENCES tea_type (id)');
        $this->addSql('CREATE INDEX IDX_8E86D7B2C54C8C93 ON tea (type_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tea DROP FOREIGN KEY FK_8E86D7B2C54C8C93');
        $this->addSql('DROP TABLE tea_type');
        $this->addSql('DROP INDEX IDX_8E86D7B2C54C8C93 ON tea');
        $this->addSql('ALTER TABLE tea DROP type_id');
    }
}
