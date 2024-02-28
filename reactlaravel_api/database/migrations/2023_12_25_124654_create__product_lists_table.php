<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('_product_lists', function (Blueprint $table) {
            $table->id();
            // $table->integer('category_id');
            $table->string('product_name');
            $table->string('slug');
            $table->string('brand');
            $table->string('selling_price');
            $table->string('buying_price');
            $table->string('quantity');
            $table->string('status');
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_product_lists');
    }
};
