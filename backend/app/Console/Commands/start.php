<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class start extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:start';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '
    - Run Migrations
    - Run Seeders
    - Run App';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        # Migrate DB Scheme
        $this->call("migrate");

        # Seed the DB
        $this->call("db:seed");

        $this->info("Admin email: admin@admin.com");
        $this->info("Admin password: 1234qwer");

        # Create JWT Secret
        $this->call("jwt:secret");

        # Serve the application
        $this->call("serve");
    }
}
