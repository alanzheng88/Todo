# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "dummy"

  config.vm.provider :aws do |aws, override|
    aws.access_key_id = ENV['AWS_ACCESS_KEY_ID']
    aws.secret_access_key = ENV['AWS_SECRET_ACCESS_KEY']
    # security group must have ssh port opened
    aws.security_groups = ENV['AWS_SECURITY_GROUPS']
    aws.keypair_name = ENV['AWS_KEYPAIR_NAME']
    aws.region = 'us-west-2'
    aws.instance_type = 't2.micro'

    # CentOS 7 (x86_64) - with Updates HVM
    aws.ami = "ami-3ecc8f46"

    # this user is a mandatory requirement for this CentOS 7 image 
    override.ssh.username = "centos"
    override.ssh.private_key_path = ENV['AWS_PRIVATE_KEY_PATH']
  end

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/vagrant", disabled: true

end
